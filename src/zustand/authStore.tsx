import { create } from "zustand";
import * as SecureStore from "expo-secure-store";
import { Clients, Contract } from "../interfaces/auth/auth.interface";

interface IAuthStore {
  user: Clients | null;
  accessToken: string | null;
  isAuth: boolean;
  contracts: Contract[] | [];
  setAccessToken: (token: string) => void;
  setUser: (user: any) => void;
  setContracts: (contracts: Contract[]) => void;
  logout: () => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  user: null,
  accessToken: null,
  isAuth: false,
  contracts: [],

  setAccessToken: (token) => {
    set({ accessToken: token, isAuth: true });
    console.log("cambie el token");
  },

  setUser: (user) => {
    set({ user: user });
  },

  setContracts: (contracts: Contract[]) => {
    set({ contracts: contracts });
  },

  logout: async () => {
    set({ user: null, accessToken: null, isAuth: false });
    await SecureStore.deleteItemAsync("token");
    console.log("logout");
  },
}));
