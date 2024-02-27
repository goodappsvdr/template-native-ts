import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NewsImageList } from "../../interfaces/news/news.interface";

type Props = {
  images: NewsImageList;
};

const NewsTopImages = ({ images }: Props) => {
  return (
    <View style={{ height: 100, flexDirection: "row" }}>
      {images.map((image, index) => (
        <Image
          key={index}
          source={{ uri: image.image }}
          style={{ width: "50%" }}
        />
      ))}
    </View>
  );
};

export default NewsTopImages;

const styles = StyleSheet.create({});
