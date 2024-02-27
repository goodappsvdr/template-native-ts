import React from "react";
import {
  Image,
  ImageBackground,
  ImageBackgroundBase,
  View,
} from "react-native";
import LogoBlancoGris from "../Icons/LogoBlancoGris";
const fondo = require("../../../assets/fondeheader.png");

const BackroundYellow = () => {
  return (
    <View
      style={{
        alignItems: "center",
        position: "relative",
      }}
    >
      <View
        style={{
          position: "absolute",
          zIndex: 10,
          top: "50%",
          transform: [{ translateY: -60 }],
        }}
      >
        <LogoBlancoGris width={120} height={120} />
      </View>
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
