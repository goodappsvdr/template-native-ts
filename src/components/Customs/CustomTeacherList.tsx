import {
  FlatList,
  Image,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { EquipmentsDiscipline } from "../../interfaces/disciplines/disciplines.interface";
import CustomText from "./CustomText";
const defaultImage = require("../../../assets/DefaultImage.jpg");

type Props = {
  data: EquipmentsDiscipline[];
};

const CustomTeacherList = ({ data }: Props) => {
  const { width } = useWindowDimensions();

  const itemWidth = (width - 64) / 3;
  return (
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        style={{ width: "100%" }}
        contentContainerStyle={{ gap: 16 }}
        keyExtractor={(item) => item.idEquipment.toString()}
        scrollEnabled={data.length > 3}
        renderItem={({ item }) => {
          const image = item.image ? { uri: item.image } : defaultImage;
          return (
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: itemWidth,
                aspectRatio: 3 / 5,
                position: "relative",
              }}
            >
              <Image
                source={image}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "cover",
                }}
              />
              <CustomText
                style={{
                  position: "absolute",
                  color: item.image ? "#ffffff" : "#000000",
                  bottom: 16,
                  textAlign: "center",
                }}
              >
                {item.equipment}
              </CustomText>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CustomTeacherList;

const styles = StyleSheet.create({});
