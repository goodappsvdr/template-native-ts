import { DimensionValue, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import DaysIcon from "../Icons/DaysIcon";
import HoursIcon from "../Icons/HoursIcon";
import TeacherIcon from "../Icons/TeacherIcon";
import { COLORS } from "../../Constants/Colors";
import {
  Disciplines,
  Schedule,
} from "../../interfaces/disciplines/disciplines.interface";

type Props = {
  item: Schedule;
  width: DimensionValue;
};

const CustomSheduleCell = ({ item, width }: Props) => {
  return (
    <View
      key={item.idSchedule}
      style={{
        marginBottom: 16,
        padding: 8,
        gap: 8,
        width: width,
      }}
    >
      <CustomText style={{ color: COLORS.primary, fontSize: 18 }}>
        {item.age}
      </CustomText>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          gap: 8,
        }}
      >
        <DaysIcon
          width={20}
          height={20}
          fill={COLORS.secondary}
          style={{ marginTop: 4 }}
        />
        <Text
          style={{ width: "70%", fontFamily: "Montserrat-Bold" }}
          numberOfLines={3}
        >
          {item.day}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          gap: 8,
        }}
      >
        <HoursIcon width={20} height={20} fill={COLORS.secondary} />
        <Text style={{ fontFamily: "Montserrat-Bold" }}>{item.hour}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          gap: 8,
        }}
      >
        <TeacherIcon width={20} height={20} fill={COLORS.secondary} />
        <CustomText>{item.equipment}</CustomText>
      </View>
    </View>
  );
};

export default CustomSheduleCell;

const styles = StyleSheet.create({});
