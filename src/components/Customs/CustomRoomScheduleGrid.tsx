import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Schedule } from "../../interfaces/disciplines/disciplines.interface";
import CustomText from "./CustomText";
import { COLORS } from "../../Constants/Colors";
import { shadow } from "react-native-paper";
import DaysIcon from "../Icons/DaysIcon";
import HoursIcon from "../Icons/HoursIcon";
import TeacherIcon from "../Icons/TeacherIcon";
import CustomSheduleCell from "./CustomSheduleCell";
import { SchedulesOffice } from "../../interfaces/consulting/consulting.interface";
import CustomRoomSheduleCell from "./CustomRoomSheduleCell";

type Props = {
  data: SchedulesOffice[];
};

const CustomRoomSheduleGrid = ({ data }: Props) => {
  if (data.length === 0)
    return <CustomText>No hay horarios disponibles</CustomText>;

  return (
    <View style={styles.container}>
      {data.map((schedule, index) => {
        return (
          <CustomRoomSheduleCell
            item={schedule}
            key={schedule.idScheduleOffice}
            width={data.length > 1 ? "50%" : "100%"}
          />
        );
      })}
    </View>
  );
};

export default CustomRoomSheduleGrid;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 16,
  },
});
