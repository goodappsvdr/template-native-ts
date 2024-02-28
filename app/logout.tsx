import { useQuery } from "@tanstack/react-query";
import { Redirect, router } from "expo-router";
import { useAuthStore } from "../src/zustand/authStore";
import { View } from "react-native";
import CustomText from "../src/components/Customs/CustomText";
import { useEffect } from "react";

const logout = async () => {
  useAuthStore.getState().logout();

  router.replace("login");

  return true;
};

export default function Page() {
  useEffect(() => {
    logout();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <CustomText style={{ fontFamily: "Montserrat-Regular" }}>
        Cerrando sesión
      </CustomText>
    </View>
  );
}
