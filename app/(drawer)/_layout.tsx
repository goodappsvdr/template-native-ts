import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Pressable, Text } from "react-native";
import { useNavigation } from "expo-router";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import CustomDrawerContent from "../../src/components/Customs/CustomDrawerContent";

const DrawerMenu = () => {
  const navigation = useNavigation() as DrawerNavigationProp<{}>;

  return (
    <Drawer
      drawerContent={CustomDrawerContent}
      screenOptions={{
        // headerLeft: () => {
        //   const canGoBack = navigation.canGoBack();
        //   if (canGoBack) {
        //     return (
        //       <Pressable
        //         onPress={() => {
        //           navigation.goBack();
        //         }}
        //       >
        //         <Text>Back</Text>
        //       </Pressable>
        //     );
        //   }
        // },
        headerShown: false,
        drawerActiveTintColor: "red",
        drawerStyle: {
          width: 320,
        },

        // a la izquierda poner el boton para volver atras
        // boton para abrir el menu a la derecha
      }}
    ></Drawer>
  );
};

export default DrawerMenu;
