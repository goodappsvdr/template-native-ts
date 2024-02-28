import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LogoGris from "../Icons/LogoGris";

type Props = {};

const GeneralLoader = (props: Props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <LogoGris width={160} height={80} />
    </View>
  );
};

export default GeneralLoader;

const styles = StyleSheet.create({});
