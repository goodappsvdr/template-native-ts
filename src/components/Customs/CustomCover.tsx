import React from "react";
import { Image, Text, View, useWindowDimensions } from "react-native";
import { COLORS } from "../../Constants/Colors";
import CustomRenderHtml from "./CustomRenderHtml";
import Animated from "react-native-reanimated";
import WavesBlanco from "../Icons/WavesCoverBlanco";

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
        <View
          style={{
            position: "absolute",
            bottom: 0,
            height: 40,
            zIndex: 20,
            width: "100%",
          }}
        >
          <WavesBlanco width={width} height={width / 8} />
        </View>
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
