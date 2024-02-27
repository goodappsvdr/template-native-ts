import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomSwitchLabel from "../Customs/CustomSwitch&Label";
import { COLORS } from "../../Constants/Colors";

type Props = {};

const NewsNotificactionConfig = (props: Props) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    console.log(
      `Notificaciones de noticias: ${isEnabled ? "Activadas" : "Desactivadas"}`
    );
    setIsEnabled((current) => {
      console.log(
        `Notificaciones de noticias cambiando a: ${
          current ? "Desactivadas" : "Activas"
        }`
      );

      return !current;
    });
  };
  return (
    <CustomSwitchLabel
      label="Noticias y eventos"
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        padding: 8,
        marginTop: 32,
        marginHorizontal: 16,
        paddingLeft: 16,
        elevation: 1,
      }}
      value={isEnabled}
      labelStyles={{
        color: COLORS.secondary,
        textTransform: "uppercase",
        fontSize: 20,
        fontFamily: "Montserrat-Black",
      }}
      onChange={toggleSwitch}
      switchProps={{
        trackColor: { false: COLORS.disabledBg, true: COLORS.primarylight },
        thumbColor: COLORS.primary,
      }}
    />
  );
};

export default NewsNotificactionConfig;

const styles = StyleSheet.create({});
