import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Disciplines } from "../../interfaces/disciplines/disciplines.interface";
import CustomText from "../Customs/CustomText";
import { router } from "expo-router";
import Animated from "react-native-reanimated";

interface DisciplinesCardProps {
  discipline: Disciplines;
}

const DisciplinesCard = ({ discipline }: DisciplinesCardProps) => {
  const redirect = () => {
    router.navigate(`/diciplines/${discipline.idDiscipline}`);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        height: 240,
        position: "relative",
      }}
      onPress={redirect}
    >
      <Image
        source={{
          uri: discipline.image,
        }}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <CustomText
        style={{
          position: "absolute",
          color: "#fff",
          textTransform: "uppercase",
          textAlign: "center",
          fontSize: 16,
          bottom: 16,
        }}
      >
        {discipline.description}
      </CustomText>
    </TouchableOpacity>
  );
};

export default DisciplinesCard;
