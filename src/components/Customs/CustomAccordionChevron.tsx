import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../../Constants/Colors";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";

type Props = {
  progress: SharedValue<number>;
};

const CustomAccordionChevron = ({ progress }: Props) => {
  const iconStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotate: `${progress.value * 90}deg`,
      },
    ],
  }));
  return (
    <Animated.View style={iconStyle}>
      <Entypo name="chevron-right" size={24} color={COLORS.secondary} />
    </Animated.View>
  );
};

export default CustomAccordionChevron;

const styles = StyleSheet.create({});
