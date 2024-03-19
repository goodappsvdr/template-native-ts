import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { Skeleton } from "moti/skeleton";
import { COLORS } from "../../Constants/Colors";

type Props = {};

const NewDisciplinesSkeleton = (props: Props) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        marginTop: 100,
        marginBottom: 16,
        gap: 16,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.disabledBg,
          width: "100%",
          aspectRatio: 4 / 3,
        }}
      >
        <Skeleton
          width={"100%"}
          height={(width - 32) / (4 / 3)}
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

export default NewDisciplinesSkeleton;

const styles = StyleSheet.create({});
