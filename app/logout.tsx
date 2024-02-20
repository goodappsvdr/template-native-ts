import { useQuery } from "@tanstack/react-query";
import { Redirect } from "expo-router";
import { useAuthStore } from "../src/zustand/authStore";

const logout = async () => {
  useAuthStore.getState().logout();

  return true;
};

export default function Page() {
  useQuery({
    queryKey: ["logout"],
    queryFn: logout,
    staleTime: 1000,
  });

  return <Redirect href="login" />;
}
