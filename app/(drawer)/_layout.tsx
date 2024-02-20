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
  console.log("getuserinfo");
  try {
    let token;

    const tokenZustand = (useAuthStore.getState() as any).accessToken;

    if (tokenZustand) {
      token = tokenZustand;
    } else {
      const tokenSecureStore = await SecureStoreGetItemAsync("token");
      if (tokenSecureStore) {
        token = tokenSecureStore;
      }
    }

    if (!token) {
      console.log("no existe token");
      useAuthStore.getState().logout();
      return false;
    }

    const decodedToken = jwtDecode(token) as IUserInfo;

    const date = new Date();

    if (decodedToken.exp!! < date.getTime() / 1000) {
      console.log("expiro token");
      useAuthStore.getState().logout();

      await SecureStoreSetItemAsync("token", "");
      return false;
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
    return false;
  }
};

const DrawerMenu = () => {
  const navigation = useNavigation() as DrawerNavigationProp<{}>;

  const { accessToken } = useAuthStore();

  const validateSessionQuery = useQuery({
    queryKey: ["validateSession", accessToken],
    queryFn: getUserInfo,
    staleTime: 1000 * 60,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
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
          flex: 1,
        },
      }}
    ></Drawer>
  );
};

export default DrawerMenu;
