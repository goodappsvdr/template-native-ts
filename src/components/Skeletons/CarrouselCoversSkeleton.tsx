import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { COLORS } from "../../Constants/Colors";
import { Skeleton } from "moti/skeleton";

type Props = {};

const CarrouselCoversSkeleton = (props: Props) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flex: 1,
        marginBottom: 32,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.disabledBg,
          width: "100%",
          aspectRatio: 750 / 500,
        }}
      >
        <Skeleton
          width={"100%"}
          height={width / (750 / 500)}
          radius="square"
          colorMode="light"
          transition={{
            type: "decay",
          }}
        ></Skeleton>
      </View>
    </View>
  );
};

export default CarrouselCoversSkeleton;

const styles = StyleSheet.create({});
