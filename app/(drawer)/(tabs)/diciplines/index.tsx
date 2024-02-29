import { Link } from "expo-router";
import React from "react";
import {
  FlatList,
  Pressable,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";
import { COLORS } from "../../../../src/Constants/Colors";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { api } from "../../../../src/api/api";
import { GetAllDisciplinesResponse } from "../../../../src/interfaces/disciplines/disciplines.interface";
import DisciplinesCard from "../../../../src/components/Disciplines/DisciplinesCard";
import CustomText from "../../../../src/components/Customs/CustomText";
import { useAuthStore } from "../../../../src/zustand/authStore";
import TwoColumnListSkeleton from "../../../../src/components/Skeletons/TwoColumnListSkeleton";

const getAllDiciplines = async (): Promise<GetAllDisciplinesResponse> => {
  try {
    const response = await api.get("/DisciplinaHome/GetAsync");

    return response.data;
  } catch (error) {
    return {
      result: true,
      message: "Exito",
      disciplines: [],
    };
  }
};

const Diciplines = () => {
  const { user } = useAuthStore();
  const getAllDisciplinesQuery = useQuery({
    queryKey: ["disciplines", user],
    queryFn: getAllDiciplines,
    staleTime: 1000 * 60 * 60,
  });

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}

      {/* Lista de diciplinas */}
      {getAllDisciplinesQuery.isFetching &&
      !getAllDisciplinesQuery.isRefetching ? (
        <TwoColumnListSkeleton />
      ) : (
        <View style={{ flex: 1 }}>
          {getAllDisciplinesQuery.data?.disciplines.length === 0 ? (
            <Text>No hay disciplinas</Text>
          ) : (
            <FlatList
              data={getAllDisciplinesQuery.data?.disciplines}
              numColumns={2}
              columnWrapperStyle={{
                gap: 16,
                paddingHorizontal: 16,
              }}
              onScroll={(e) => console.log(e.nativeEvent.contentOffset.y)}
              refreshControl={
                <RefreshControl
                  refreshing={getAllDisciplinesQuery.isRefetching}
                  onRefresh={getAllDisciplinesQuery.refetch}
                />
              }
              contentContainerStyle={{ gap: 16 }}
              keyExtractor={(item) => item.idDiscipline.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <DisciplinesCard key={item.idDiscipline} discipline={item} />
                );
              }}
              ListHeaderComponent={
                <View style={{ paddingTop: 32, paddingBottom: 16 }}>
                  <CustomText
                    style={{
                      color: COLORS.primary,
                      fontSize: 32,
                      textTransform: "uppercase",
                      textAlign: "center",
                    }}
                  >
                    Disciplinas
                  </CustomText>
                </View>
              }
              ListFooterComponent={<View style={{ paddingBottom: 80 }}></View>}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default Diciplines;
