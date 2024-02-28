import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Skeleton } from "moti/skeleton";

type Props = {};

const ProfileSkeleton = (props: Props) => {
  return (
    <View style={{ gap: 32 }}>
      <View style={{ height: 250, width: "100%", overflow: "hidden" }}>
        <Skeleton
          width={"100%"}
          height={"100%"}
          radius="square"
          colorMode="light"
          transition={{
            type: "decay",
          }}
        />
      </View>
      {/* titulo y descripcion */}
      <View style={{ paddingHorizontal: 16, borderRadius: 2, gap: 32 }}>
        <Skeleton
          width={120}
          height={32}
          radius={0}
          colorMode="light"
          transition={{
            type: "decay",
          }}
        />
        <View style={{ gap: 8 }}>
          <Skeleton
            width={"100%"}
            height={16}
            radius={0}
            colorMode="light"
            transition={{
              type: "decay",
            }}
          />
          <Skeleton
            width={"100%"}
            height={16}
            radius={0}
            colorMode="light"
            transition={{
              type: "decay",
            }}
          />
          <Skeleton
            width={"100%"}
            height={16}
            radius={0}
            colorMode="light"
            transition={{
              type: "decay",
            }}
          />
        </View>
      </View>
      <View style={{ height: 250, width: "100%", overflow: "hidden" }}>
        <Skeleton
          width={"100%"}
          height={"100%"}
          radius="square"
          colorMode="light"
          transition={{
            type: "decay",
          }}
        />
      </View>
    </View>
  );
};

export default ProfileSkeleton;

const styles = StyleSheet.create({});
