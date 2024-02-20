import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const RoomsById = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>RoomsById {id}</Text>
    </View>
  );
};

export default RoomsById;
