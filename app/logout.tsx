import { useQuery } from "@tanstack/react-query";
import { Redirect, router } from "expo-router";
import { useAuthStore } from "../src/zustand/authStore";
import { ActivityIndicator, View } from "react-native";
import CustomText from "../src/components/Customs/CustomText";
import { useEffect } from "react";
import { COLORS } from "../src/Constants/Colors";

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
        gap: 16,
      }}
    >
      <CustomText style={{ fontFamily: "Montserrat-Regular", fontSize: 20 }}>
        Cerrando sesión
      </CustomText>
      <ActivityIndicator size="large" color={COLORS.secondary} />
    </View>
  );
}
