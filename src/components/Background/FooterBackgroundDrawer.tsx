import React from "react";
import {
  Image,
  ImageBackground,
  ImageBackgroundBase,
  Text,
  View,
} from "react-native";
const fondo = require("../../../assets/fondodrawer.png");

const FooterBackgroundDrawer = ({ bottom }: { bottom: number }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 220,
        position: "relative",
      }}
    >
      <Text
        style={{
          position: "absolute",
          color: "#fff",
          fontSize: 20,
          textAlign: "center",
          fontWeight: "900",
          textTransform: "uppercase",
          bottom: 32,
          right: 16,
          left: 16,
          zIndex: 2,
        }}
      >
        La felicidad se entrena
      </Text>
      <Image
        source={fondo}
        style={{
          width: "100%",
          objectFit: "contain",
        }}
      />
    </View>
  );
};

export default FooterBackgroundDrawer;
