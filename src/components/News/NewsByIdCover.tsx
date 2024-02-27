import React from "react";
import { Image, Text, View, useWindowDimensions } from "react-native";
import { COLORS } from "../../Constants/Colors";
import ShareButton from "../Customs/CustomSHareButton";
const imgCover = require("../../../assets/WavesCoverFina.png");

type Props = {
  imgSrc: string;
  title: string;
  subtitle: string;
  titleColor?: string;
  url: string;
};

const NewsByIdCover = ({
  imgSrc,
  title,
  subtitle,
  titleColor = COLORS.primary,
  url,
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
      <View
        style={{
          flexDirection: "row",
          padding: 16,
          alignItems: "center",
          gap: 16,
          flex: 1,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontFamily: "Montserrat-Black",
            color: titleColor,
            textTransform: "uppercase",
            flex: 1,
          }}
        >
          {title}
        </Text>
        {/* boton de compartir */}
        <View>
          <ShareButton url={url} title={title} />
        </View>
      </View>

      <View
        style={{
          padding: 16,
        }}
      >
        <Text>{subtitle}</Text>
      </View>
    </View>
  );
};

export default NewsByIdCover;
