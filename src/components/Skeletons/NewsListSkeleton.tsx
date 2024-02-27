import { Skeleton } from "moti/skeleton";
import React from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { COLORS } from "../../Constants/Colors";

type Props = {};

const NewsListSkeleton = (props: Props) => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        marginTop: 100,
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

export default NewsListSkeleton;

const styles = StyleSheet.create({});
