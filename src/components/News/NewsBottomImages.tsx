import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { NewsImageList } from "../../interfaces/news/news.interface";

type Props = {
  images: NewsImageList;
};

const NewsBottomImages = ({ images }: Props) => {
  const { width } = useWindowDimensions();
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={images}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Image
            source={{ uri: item.image }}
            style={{ width: width / 3, height: 100 }}
          />
        </View>
      )}
    />
  );
};

export default NewsBottomImages;

const styles = StyleSheet.create({});
