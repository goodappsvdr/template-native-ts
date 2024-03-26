import { create } from "zustand";
import * as SecureStore from "expo-secure-store";
import { Clients, Contract } from "../interfaces/auth/auth.interface";
import { TokenExpo } from "../interfaces/expoToken/expoToken.interface";
import { err } from "react-native-svg";

interface IAuthStore {
  user: Clients | null;
  accessToken: string | null;
  expoToken: string | null;
  isAuth: boolean;
  notifications: TokenExpo | null;
  contracts: Contract[] | [];

  setAccessToken: (token: string) => void;
  setNotificacions: (notifications: TokenExpo) => void;
  setExpoToken: (token: string) => void;
  setUser: (user: any) => void;
  setContracts: (contracts: Contract[]) => void;
  logout: () => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  user: null,
  accessToken: null,
  expoToken: null,
  isAuth: false,
  notifications: null,
  contracts: [],

  setAccessToken: (token) => {
    set({ accessToken: token, isAuth: true });
  },
  setNotificacions: (notifications) => {
    set({ notifications: notifications });
  },
  setExpoToken: async (token) => {
    set({ expoToken: token });
  },

  setUser: (user) => {
    set({ user: user });
  },

  setContracts: (contracts: Contract[]) => {
    set({ contracts: contracts });
  },

  logout: async () => {
    try {
      set({ user: null, accessToken: null, isAuth: false });
      await SecureStore.deleteItemAsync("token");
    } catch (error) {
      console.log(error);
    }
  },
}));
