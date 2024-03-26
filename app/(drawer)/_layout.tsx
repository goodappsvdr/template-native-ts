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
import { api } from "../../src/api/api";
import { AxiosResponse } from "axios";
import { ClientesGetAsyncResponse } from "../../src/interfaces/auth/auth.interface";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import GeneralLoader from "../../src/components/Skeletons/GeneralLoader";
import { getAsyncResponse } from "../../src/interfaces/expoToken/expoToken.interface";
import CustomHeader from "../../src/components/Customs/CustomHeader";

interface IUserInfo extends JwtPayload {
  email: string;
  unique_name: string;
  nameid: string;
}

const getUserInfo = async () => {
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
      useAuthStore.getState().logout();
      return false;
    }

    const decodedToken = jwtDecode(token) as IUserInfo;

    const date = new Date();

    if (decodedToken.exp!! < date.getTime() / 1000) {
      useAuthStore.getState().logout();

      await SecureStoreSetItemAsync("token", "");
      return false;
    }

    if (!tokenZustand) useAuthStore.getState().setAccessToken(token);

    const response = await api.get(`/Clientes/GetAsync/${decodedToken.nameid}`);

    const data = response.data as ClientesGetAsyncResponse;

    useAuthStore.getState().setUser(data.clients);
    useAuthStore.getState().setContracts(data.contracts);

    const expoToken =
      (await SecureStoreGetItemAsync("expoToken")) ||
      useAuthStore.getState().expoToken;

    const getExpoTokenStatus = await api.get<getAsyncResponse>(
      "/TokenExpo/GetAsync/" + data.clients.idClient
    );

    if (
      getExpoTokenStatus.data.result === false ||
      getExpoTokenStatus.data.tokenExpo.token !== expoToken ||
      getExpoTokenStatus.data.tokenExpo.active === null
    ) {
      const addExpoToken = await api.post<getAsyncResponse>(
        "/TokenExpo/AddAsync",
        {
          idCliente: data.clients.idClient,
          token: expoToken,
        }
      );

      useAuthStore.getState().setNotificacions(addExpoToken.data.tokenExpo);

      return addExpoToken.data;
    } else if (getExpoTokenStatus.data.tokenExpo.active !== null) {
      useAuthStore
        .getState()
        .setNotificacions(getExpoTokenStatus.data.tokenExpo);
    }

    // Guardar el expo token con el userId

    return getExpoTokenStatus.data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const DrawerMenu = () => {
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
    return <GeneralLoader />;
  }

  return (
    <Drawer
      drawerContent={CustomDrawerContent}
      screenOptions={{
        headerShown: false,
        // header: () => {
        //   return <CustomHeader goBackEnabled={true} />;
        // },

        drawerStyle: {
          width: 320,
          flex: 1,
        },
      }}
    ></Drawer>
  );
};

export default DrawerMenu;
