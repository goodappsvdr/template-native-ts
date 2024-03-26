import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../Constants/Colors";
import { News } from "../../interfaces/news/news.interface";
import CustomText from "../Customs/CustomText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
const wavesVerde = require("../../../assets/WavesVerde.png");

type Props = {
  news: News;
};

const NewsListCard = ({ news }: Props) => {
  const redirect = () => {
    // Redirect to news detail

    router.navigate(`/news-stack/${news.idNoticia}`);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.95}
      style={{ position: "relative" }}
      onPress={redirect}
    >
      <Image
        source={{ uri: news.imagen }}
        style={{ width: "100%", aspectRatio: 4 / 3 }}
      />

      {/* Seccion verde */}
      <View
        style={{
          backgroundColor: COLORS.secondary,
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        {/* Ondas */}
        <Image
          source={wavesVerde}
          style={{
            resizeMode: "stretch",
            position: "absolute",
            bottom: "100%",
            width: "100%",
            height: 32,
          }}
        />

        <CustomText
          style={{
            color: COLORS.primary,
            textTransform: "uppercase",
            padding: 16,
          }}
        >
          {news.titulo}
        </CustomText>
        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",

            flex: 1,
            flexDirection: "row",
            gap: 16,
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}
        >
          <Text style={{ color: "#fff", width: "80%" }} numberOfLines={2}>
            {news.subTitulo}
          </Text>
          <FontAwesome name="plus-circle" size={36} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NewsListCard;

const styles = StyleSheet.create({});
