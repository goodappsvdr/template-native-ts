import { create } from "zustand";
import * as SecureStore from "expo-secure-store";

interface IAuthStore {
  user: any;
  accessToken: string | null;
  isAuth: boolean;
  setAccessToken: (token: string) => void;
  setUser: (user: any) => void;
  logout: () => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  user: null,
  accessToken: null,
  isAuth: false,

  setAccessToken: (token) => set({ accessToken: token, isAuth: true }),

  setUser: (user) => set({ user: user }),

  logout: async () => {
    set({ user: null, accessToken: null, isAuth: false });
    await SecureStore.deleteItemAsync("token");
  },
}));
