import { DimensionValue, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Investment } from "../../interfaces/disciplines/disciplines.interface";
import CustomText from "./CustomText";
import { COLORS } from "../../Constants/Colors";
import DaysIcon from "../Icons/DaysIcon";
import HoursIcon from "../Icons/HoursIcon";
import MoneyIcon from "../Icons/MoneyIcon";

type Props = {
  item: Investment;
  width: DimensionValue;
};

const CustomInvestmentCell = ({ item, width }: Props) => {
  return (
    <View
      key={item.idInvestment}
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
          {item.description}
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
        <Text style={{ fontFamily: "Montserrat-Bold" }}>{item.minute}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          gap: 8,
        }}
      >
        <MoneyIcon width={20} height={20} fill={COLORS.secondary} />
        <CustomText style={{ color: COLORS.primary }}>{item.price}</CustomText>
      </View>
    </View>
  );
};

export default CustomInvestmentCell;

const styles = StyleSheet.create({});
