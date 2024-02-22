import {
  FlatList,
  Image,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";

import CustomText from "./CustomText";
import { EmployeeList } from "../../interfaces/consulting/consulting.interface";
import { UseQueryResult } from "@tanstack/react-query";
const defaultImage = require("../../../assets/DefaultImage.jpg");

type Props = {
  data: EmployeeList;
  query: UseQueryResult<EmployeeList, Error>;
};

const CustomRoomEmployeeList = ({ data, query }: Props) => {
  const { width } = useWindowDimensions();

  const itemWidth = (width - 64) / 3;

  const handleRefresh = () => {
    query.refetch();
  };
  return (
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
      <FlatList
        horizontal={true}
        data={data}
        style={{ width: "100%", flexDirection: "row" }}
        contentContainerStyle={{ gap: 16 }}
        keyExtractor={(item) => item.idEmpleado.toString()}
        refreshing={query.isRefetching}
        onRefresh={handleRefresh}
        refreshControl={
          query.isFetching ? <CustomText>Cargando...</CustomText> : undefined
        }
        scrollEnabled={data.length > 3}
        renderItem={({ item }) => {
          const image = item.imagen ? { uri: item.imagen } : defaultImage;
          return (
            <View
              style={{
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
                  color: item.imagen ? "#ffffff" : "#000000",
                  bottom: 16,
                  textAlign: "center",
                }}
              >
                {`${item.nombre} ${item.apellido}`}
              </CustomText>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CustomRoomEmployeeList;

const styles = StyleSheet.create({});
