import React from "react";
import {
  Image,
  ImageBackground,
  ImageBackgroundBase,
  Text,
  View,
} from "react-native";
import CustomText from "../Customs/CustomText";
const fondo = require("../../../assets/fondodrawer.png");

const FooterBackgroundDrawer = ({ bottom }: { bottom: number }) => {
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        bottom: 0,
        margin: "auto",
        alignItems: "baseline",
        backgroundColor: "#ff000",

        overflow: "hidden",
      }}
    >
      <View style={{ paddingVertical: 4 }} />
      <CustomText
        style={{
          position: "absolute",
          color: "#fff",
          fontSize: 18,
          textAlign: "center",
          textTransform: "uppercase",
          bottom: bottom + 32,
          right: 16,
          left: 16,
          zIndex: 2,
        }}
      >
        La felicidad se entrena
      </CustomText>
      <Image
        source={fondo}
        style={{
          width: 330,

          objectFit: "cover",
        }}
      />
    </View>
  );
};

export default FooterBackgroundDrawer;
