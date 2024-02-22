import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React from "react";
import { api } from "../../../../src/api/api";
import { News } from "../../../../src/interfaces/news/news.interface";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";

const getNewsById = async ({
  querykey,
}: {
  querykey: [string, string];
}): Promise<News> => {
  const id = querykey[1];
  const response = await api.get(`/Noticias/GetFront/${id}`);

  return response.data;
};

type MySearchParams = {
  id: string;
};

const NewsById = () => {
  const params = useLocalSearchParams() as MySearchParams;
  const { width } = useWindowDimensions();
  const { id } = params;

  const getNewsByIdQuery = useQuery({
    queryKey: ["newsById", id],
    queryFn: getNewsById,
  });
  return (
    <View>
      <Text>NewsById</Text>
    </View>
  );
};

export default NewsById;

const styles = StyleSheet.create({});
