import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import MenuIcon from "../Icons/MenuIcon";
import GoBackIcon from "../Icons/GoBackIcon";
import { COLORS } from "../../Constants/Colors";

interface CustomHeaderProps {
  goBackEnabled: boolean;
}

const CustomHeader = ({ goBackEnabled }: CustomHeaderProps) => {
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
        {goBackEnabled && canGoBack && (
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

      {/* right */}
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
    </View>
  );
};

export default CustomHeader;
