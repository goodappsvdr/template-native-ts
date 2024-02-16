import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Diciplines = () => {
  return (
    <View>
      <Text>Diciplines</Text>
      <Link href={"/diciplines/1"}>
        <Text>1</Text>
      </Link>
      <Link href={"/2"}>
        <Text>2</Text>
      </Link>
      <Link href={"/3"}>
        <Text>3</Text>
      </Link>
    </View>
  );
};

export default Diciplines;
