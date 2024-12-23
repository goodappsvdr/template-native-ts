import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { Office } from "../../interfaces/consulting/consulting.interface";
import CustomText from "../Customs/CustomText";
import { router } from "expo-router";

interface RoomsCardProps {
  room: Office;
}

const RoomsCard = ({ room }: RoomsCardProps) => {
  const redirect = () => {
    router.navigate(`/consulting-rooms-stack/${room.idOffice}`);
  };
  return (
    <TouchableOpacity
      activeOpacity={0.95}
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
          uri: room.image,
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
        {room.description}
      </CustomText>
    </TouchableOpacity>
  );
};

export default RoomsCard;
