import {
  StyleSheet,
  Switch,
  SwitchProps,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { COLORS } from "../../Constants/Colors";

type Props = {
  style?: ViewStyle;
  label: string;
  labelStyles?: TextStyle;
  value: boolean;
  switchProps?: SwitchProps;
  onChange: () => void;
};

const CustomSwitchLabel = ({
  style,
  label,
  labelStyles,
  value,
  switchProps,
  onChange,
}: Props) => {
  return (
    <View style={style}>
      <Text style={labelStyles}>{label}</Text>
      <Switch value={value} onValueChange={onChange} {...switchProps} />
    </View>
  );
};

export default CustomSwitchLabel;

const styles = StyleSheet.create({});
