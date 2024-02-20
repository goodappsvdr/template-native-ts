import { Link } from "expo-router";
import React from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import { COLORS } from "../../../../src/Constants/Colors";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { api } from "../../../../src/api/api";
import { GetAllDisciplinesResponse } from "../../../../src/interfaces/disciplines/disciplines.interface";
import DisciplinesCard from "../../../../src/components/Disciplines/DisciplinesCard";
import CustomText from "../../../../src/components/Customs/CustomText";
import { GetAllRoomsResponse } from "../../../../src/interfaces/consulting/consulting.interface";
import RoomsCard from "../../../../src/components/Consulting-rooms/RoomsCard";
import { useAuthStore } from "../../../../src/zustand/authStore";

const getAllConsultingRooms = async (): Promise<GetAllRoomsResponse> => {
  try {
    const response = await api.get("/Consultorio/GetAsync");

    return response.data;
  } catch (error) {
    return {
      result: true,
      message: "Exito",
      offices: [],
    };
  }
};

const Diciplines = () => {
  const { user } = useAuthStore();
  const getAllConsultingRoomsQuery = useQuery({
    queryKey: ["Consulting-rooms", user],
    queryFn: getAllConsultingRooms,
    staleTime: 1000 * 60 * 60,
  });

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}

      {/* Lista de diciplinas */}
      {getAllConsultingRoomsQuery.isFetching ? (
        <Text>Cargando...</Text>
      ) : (
        <View style={{ flex: 1 }}>
          {getAllConsultingRoomsQuery.data?.offices.length === 0 ? (
            <Text>No hay consultorios</Text>
          ) : (
            <FlatList
              data={getAllConsultingRoomsQuery.data?.offices}
              numColumns={2}
              columnWrapperStyle={{
                gap: 16,
                paddingHorizontal: 16,
              }}
              contentContainerStyle={{ gap: 16 }}
              keyExtractor={(item) => item.idOffice.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => {
                return <RoomsCard key={item.idOffice} room={item} />;
              }}
              ListHeaderComponent={
                <View style={{ paddingTop: 32, paddingBottom: 16 }}>
                  <CustomText
                    style={{
                      color: COLORS.primary,
                      fontSize: 36,
                      textTransform: "uppercase",
                      textAlign: "center",
                    }}
                  >
                    Consultorios
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
