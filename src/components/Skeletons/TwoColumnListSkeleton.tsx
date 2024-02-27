import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Skeleton } from "moti/skeleton";
import { COLORS } from "../../Constants/Colors";

type Props = {};

const TwoColumnListSkeleton = (props: Props) => {
  return (
    <FlatList
      data={[1, 2, 3, 4, 5, 6]}
      numColumns={2}
      columnWrapperStyle={{
        gap: 16,
        paddingHorizontal: 16,
      }}
      style={{ flex: 1, width: "100%", marginTop: 100 }}
      contentContainerStyle={{ gap: 16 }}
      keyExtractor={(item) => item.toString()}
      renderItem={({ item }) => {
        return (
          <View style={{ flex: 1, backgroundColor: COLORS.disabledBg }}>
            <Skeleton
              width={"100%"}
              height={240}
              radius="square"
              colorMode="light"
              transition={{
                type: "decay",
              }}
            ></Skeleton>
          </View>
        );
      }}
    />
  );
};

export default TwoColumnListSkeleton;

const styles = StyleSheet.create({});
