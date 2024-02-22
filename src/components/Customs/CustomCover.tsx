import React from "react";
import { Image, Text, View, useWindowDimensions } from "react-native";
import RenderHTML, { MixedStyleRecord } from "react-native-render-html";
const imgCover = require("../../../assets/WavesCoverFina.png");
import Waves1 from "../Icons/Waves1";
import { COLORS } from "../../Constants/Colors";
import CustomRenderHtml from "./CustomRenderHtml";

interface CustomCoverProps {
  imgSrc: string;
  title: string;
  htmlContent: string;
  titleColor?: string;
}

const CustomCover = ({
  imgSrc,
  title,
  htmlContent,
  titleColor = COLORS.primary,
}: CustomCoverProps) => {
  const { width } = useWindowDimensions();

  return (
    <View style={{ backgroundColor: "#fff" }}>
      {/* Image y waves */}
      <View style={{ position: "relative", height: 250, overflow: "hidden" }}>
        <Image
          source={{ uri: imgSrc }}
          style={{
            width: width,
            aspectRatio: 4 / 3,
            position: "absolute",
            resizeMode: "cover",
          }}
        />

        <Image
          source={imgCover}
          style={{
            width: width,
            height: width / 9,
            resizeMode: "stretch",
            position: "absolute",
            bottom: 0,
          }}
        />
      </View>

      <Text
        style={{
          fontSize: 32,
          fontFamily: "Montserrat-Black",
          color: titleColor,
          textTransform: "uppercase",
          padding: 16,
        }}
      >
        {title}
      </Text>
      <View>
        <CustomRenderHtml htmlContent={htmlContent} width={width} />
      </View>
    </View>
  );
};

export default CustomCover;
