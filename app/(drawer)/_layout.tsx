import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Pressable, Text } from "react-native";
import { useNavigation } from "expo-router";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import CustomDrawerContent from "../../src/components/Customs/CustomDrawerContent";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import {
  SecureStoreGetItemAsync,
  SecureStoreSetItemAsync,
} from "../../src/Services/SecureStorageHelpers";
import { JwtPayload, jwtDecode } from "jwt-decode";
import "core-js/stable/atob";
import { useAuthStore } from "../../src/zustand/authStore";

interface IUserInfo extends JwtPayload {
  email: string;
  unique_name: string;
}

const getUserInfo = async () => {
  try {
    const token = await SecureStoreGetItemAsync("token");

    if (!token) {
      useAuthStore.getState().logout();
      return;
    }

    const decodedToken = jwtDecode(token) as IUserInfo;

    const date = new Date();

    if (decodedToken.exp!! < date.getTime() / 1000) {
      useAuthStore.getState().logout();
      await SecureStoreSetItemAsync("token", "");
      return;
    }

    await SecureStoreSetItemAsync("email", decodedToken.email);
    await SecureStoreSetItemAsync("unique_name", decodedToken.unique_name);

    useAuthStore.getState().setUser({
      email: decodedToken.email,
      unique_name: decodedToken.unique_name,
    });

    return decodedToken;
  } catch (error) {
    console.log(error);
  }
};

const DrawerMenu = () => {
  const navigation = useNavigation() as DrawerNavigationProp<{}>;

  const validateSessionQuery = useSuspenseQuery({
    queryKey: ["validateSession"],
    queryFn: getUserInfo,
    staleTime: 1000 * 60,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (validateSessionQuery.isPending) {
    return <Text>Loading...</Text>;
  }

  return (
    <Drawer
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: 320,
        },
      }}
    ></Drawer>
  );
};

export default DrawerMenu;
