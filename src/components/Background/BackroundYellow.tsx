import React from "react";
import {
  Image,
  ImageBackground,
  ImageBackgroundBase,
  View,
} from "react-native";
const fondo = require("../../../assets/fondeheader.png");

const BackroundYellow = () => {
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Image
        source={fondo}
        style={{
          width: "100%",
          objectFit: "cover",
        }}
      />
    </View>
  );
};

export default BackroundYellow;
