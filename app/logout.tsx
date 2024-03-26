import { useQuery } from "@tanstack/react-query";
import { Redirect, router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { useAuthStore } from "../src/zustand/authStore";
import { ActivityIndicator, View } from "react-native";
import CustomText from "../src/components/Customs/CustomText";
import { useEffect } from "react";
import { COLORS } from "../src/Constants/Colors";

export default function Page() {
  const { user, accessToken, isAuth, logout } = useAuthStore();

  console.log({ user, accessToken, isAuth });
  useEffect(() => {
    const fn = async () => {
      await SecureStore.deleteItemAsync("token");
      router.replace("/login");
    };

    fn();
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
