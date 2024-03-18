import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import GoBackIcon from "../Icons/GoBackIcon";
import { COLORS } from "../../Constants/Colors";
import Animated, {
  Extrapolate,
  Extrapolation,
  interpolate,
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import CustomAccordionChevron from "./CustomAccordionChevron";

type Props = {
  title: string;
  content: React.ReactNode;
};

const CustomAccordion = ({ title, content }: Props) => {
  const contentRef = useAnimatedRef<Animated.View>();
  const heightValue = useSharedValue(0);
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withTiming(1) : withTiming(0)
  );
  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: interpolate(
      progress.value,
      [0, 1],
      [0, heightValue.value],
      Extrapolation.CLAMP
    ),
  }));
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.titleContainer}
        onPress={() => {
          if (heightValue.value === 0) {
            runOnUI(() => {
              "worklet";
              heightValue.value = measure(contentRef)?.height!;
            })();
          }
          open.value = !open.value;
        }}
      >
        <CustomText style={styles.title}>{title}</CustomText>
        <CustomAccordionChevron progress={progress} />
      </Pressable>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View ref={contentRef} style={styles.contentContainer}>
          {content}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default CustomAccordion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    elevation: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    marginHorizontal: 16,
    overflow: "hidden",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 16,
    textTransform: "uppercase",
  },
  contentContainer: {
    position: "absolute",
    top: 0,
  },
  chevron: {},
});
