import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import CustomAccordionChevron from "../Customs/CustomAccordionChevron";
import CustomText from "../Customs/CustomText";
import { set } from "react-hook-form";

type Props = {
  title: string;
  content: string;
};
const ClaimAccordionCard = ({ title, content }: Props) => {
  const [open, setOpen] = useState(false); // [1

  const progress = useDerivedValue(() =>
    open ? withTiming(1) : withTiming(0)
  );

  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: "auto",
  }));

  const toggleExpand = () => {
    setOpen((current) => !current);
  };
  return (
    <View
      style={{
        elevation: 1,

        backgroundColor: "#fff",
        padding: 16,
      }}
    >
      <Pressable onPress={toggleExpand}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <CustomText>{title}</CustomText>
          <CustomAccordionChevron progress={progress} />
        </View>
        <Animated.View style={heightAnimationStyle}>
          <Text numberOfLines={open ? 0 : 2}>{content}</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default ClaimAccordionCard;

const styles = StyleSheet.create({});
