import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const DiciplinesByID = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>DiciplinesByID {id}</Text>
    </View>
  );
};

export default DiciplinesByID;
