import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Investment,
  Schedule,
} from "../../interfaces/disciplines/disciplines.interface";
import CustomText from "./CustomText";
import { COLORS } from "../../Constants/Colors";
import { shadow } from "react-native-paper";
import DaysIcon from "../Icons/DaysIcon";
import HoursIcon from "../Icons/HoursIcon";
import TeacherIcon from "../Icons/TeacherIcon";
import CustomSheduleCell from "./CustomSheduleCell";
import CustomInvestmentCell from "./CustomInvestmentCell";

type Props = {
  data: Investment[];
};

const CustomInvestmentGrid = ({ data }: Props) => {
  if (data.length === 0)
    return <CustomText>No hay inversiones disponibles</CustomText>;

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={{
          gap: 16,
        }}
        contentContainerStyle={{ gap: 16 }}
        keyExtractor={(item) => item.idSchedule.toString()}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        renderItem={({ item }) => {
          return <CustomSheduleCell item={item} />;
        }}
      /> */}
      {data.map((investment, index) => {
        return (
          <CustomInvestmentCell
            item={investment}
            key={investment.idInvestment}
            width={data.length > 1 ? "50%" : "100%"}
          />
        );
      })}
    </View>
  );
};

export default CustomInvestmentGrid;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 16,
  },
});
