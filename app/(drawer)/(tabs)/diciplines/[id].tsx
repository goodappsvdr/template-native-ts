import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { api } from "../../../../src/api/api";
import { DisciplineByIdResponse } from "../../../../src/interfaces/disciplines/disciplines.interface";

const getDiciplineById = async ({
  queryKey,
}: {
  queryKey: [string, string];
}): Promise<DisciplineByIdResponse> => {
  const id = queryKey[1];
  const response = await api.get(`/DisciplinaHome/GetAsync/${id}`);

  return response.data;
};

type MySearchParams = {
  id: string;
};

const DiciplinesByID = () => {
  const params = useLocalSearchParams() as MySearchParams;
  const { id } = params;

  const getDiciplineByIdQuery = useQuery({
    queryKey: ["diciplineById", id],
    queryFn: getDiciplineById,
    enabled: !!id,
  });

  return (
    <View>
      <Text>{getDiciplineByIdQuery.data?.disciplines.content}</Text>
    </View>
  );
};

export default DiciplinesByID;
