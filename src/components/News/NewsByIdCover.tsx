import React from "react";
import { Image, Text, View, useWindowDimensions } from "react-native";
import { COLORS } from "../../Constants/Colors";
const imgCover = require("../../../assets/WavesCoverFina.png");

type Props = {
  imgSrc: string;
  title: string;
  subtitle: string;
  titleColor?: string;
};

const NewsByIdCover = ({
  imgSrc,
  title,
  subtitle,
  titleColor = COLORS.primary,
}: Props) => {
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
        <Text>{subtitle}</Text>
      </View>
    </View>
  );
};

export default NewsByIdCover;

const styles = StyleSheet.create({});
