import { useQuery } from "@tanstack/react-query";
import { View, FlatList, RefreshControl, Text } from "react-native";
import { COLORS } from "../../../src/Constants/Colors";
import { api } from "../../../src/api/api";
import RoomsCard from "../../../src/components/Consulting-rooms/RoomsCard";
import CustomText from "../../../src/components/Customs/CustomText";
import TwoColumnListSkeleton from "../../../src/components/Skeletons/TwoColumnListSkeleton";
import { GetAllRoomsResponse } from "../../../src/interfaces/consulting/consulting.interface";
import { useAuthStore } from "../../../src/zustand/authStore";

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
      {getAllConsultingRoomsQuery.isFetching &&
      !getAllConsultingRoomsQuery.isRefetching ? (
        <TwoColumnListSkeleton />
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
              refreshControl={
                <RefreshControl
                  refreshing={getAllConsultingRoomsQuery.isRefetching}
                  onRefresh={getAllConsultingRoomsQuery.refetch}
                />
              }
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
