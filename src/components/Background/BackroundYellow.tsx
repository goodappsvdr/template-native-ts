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
          transform: [{ translateY: -100 }],
        }}
      >
        <LogoBlancoGris width={200} height={200} />
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
