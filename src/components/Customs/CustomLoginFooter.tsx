import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
const imgFooter = require("../../../assets/imagenfooter.jpg");

type Props = {};

const CustomLoginFooter = (props: Props) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        aspectRatio: 1921 / 550,
        width: width,
        paddingTop: 16,
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={imgFooter}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "stretch",
        }}
      />
    </View>
  );
};

export default CustomLoginFooter;

const styles = StyleSheet.create({});
