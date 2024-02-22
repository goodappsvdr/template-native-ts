import { DimensionValue, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SchedulesOffice } from "../../interfaces/consulting/consulting.interface";
import CustomText from "./CustomText";
import DaysIcon from "../Icons/DaysIcon";
import HoursIcon from "../Icons/HoursIcon";
import { COLORS } from "../../Constants/Colors";

type Props = {
  item: SchedulesOffice;
  width: DimensionValue;
};

const CustomRoomSheduleCell = ({ item, width }: Props) => {
  return (
    <View
      key={item.idScheduleOffice}
      style={{
        marginBottom: 16,
        padding: 8,
        gap: 8,
        width: width,
      }}
    >
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
    </View>
  );
};

export default CustomRoomSheduleCell;

const styles = StyleSheet.create({});
