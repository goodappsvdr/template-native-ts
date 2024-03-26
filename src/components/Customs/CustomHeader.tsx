import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import MenuIcon from "../Icons/MenuIcon";
import GoBackIcon from "../Icons/GoBackIcon";
import { COLORS } from "../../Constants/Colors";
import LogoBlancoAmarillo from "../Icons/LogoBlancoAmarillo";

interface CustomHeaderProps {
  goBackEnabled: boolean;
  drawerEnabled?: boolean;
}

const CustomHeader = ({
  goBackEnabled,
  drawerEnabled = true,
}: CustomHeaderProps) => {
  const navigation = useNavigation() as DrawerNavigationProp<{}>;

  const currentRoute = navigation.getState();
  const canGoBack = currentRoute.index > 0;

  return (
    <View
      style={{
        height: 128,
        backgroundColor: COLORS.secondary,
        position: "relative",
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexDirection: "row",
        paddingBottom: 28,
      }}
    >
      {/* left */}

      <View>
        {goBackEnabled && (
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
          >
            <GoBackIcon
              fill={"#ffffff"}
              height={24}
              width={24}
              style={{ marginLeft: 16 }}
            />
          </Pressable>
        )}
      </View>

      {/* title */}
      <View
        style={{
          alignContent: "flex-end",
          justifyContent: "center",
          height: 128,
          position: "absolute",
          left: "50%",
          bottom: 16,
          transform: [{ translateX: -60 }],
        }}
      >
        <LogoBlancoAmarillo
          height={56}
          width={120}
          style={{ marginTop: "auto" }}
        />
      </View>

      {/* right */}
      {drawerEnabled && (
        <View>
          <Pressable
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <MenuIcon
              fill={"#ffffff"}
              height={24}
              width={24}
              style={{ marginRight: 16 }}
            />
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default CustomHeader;
