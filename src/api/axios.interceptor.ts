import * as SecureStore from "expo-secure-store";
import { useAuthStore } from "../zustand/authStore";
import { api } from "./api";
import {
  AxiosHeaders,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  InternalAxiosRequestConfig,
} from "axios";

interface RequestWithSecureStore extends AxiosRequestConfig {
  data?: any; // Any type for data, depending on use case
}

const updateHeader = async (request: InternalAxiosRequestConfig) => {
  const tokenZustand = (useAuthStore.getState() as any).accessToken;

  if (tokenZustand) {
    request.headers["Authorization"] = `Bearer ${tokenZustand}`;
  } else {
    const tokenSecureStore = await SecureStore.getItemAsync("token");
    if (tokenSecureStore) {
      request.headers["Authorization"] = `Bearer ${tokenSecureStore}`;
    }
  }

  if (request.data instanceof FormData) {
    request.headers["Content-Type"] = "multipart/form-data";
  } else {
    request.headers["Content-Type"] = "application/json";
  }

  return request;
};

export const AxiosInterceptor = () => {
  api.interceptors.request.use((request) => {
    return updateHeader(request);
  });
};
