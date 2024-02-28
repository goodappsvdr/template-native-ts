import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { RefreshControl, ScrollView, Text, View } from "react-native";
import { COLORS } from "../../../../src/Constants/Colors";
import { api } from "../../../../src/api/api";
import CustomAccordion from "../../../../src/components/Customs/CustomAccordion";
import CustomCover from "../../../../src/components/Customs/CustomCover";
import CustomRoomEmployeeList from "../../../../src/components/Customs/CustomRoomEmployeeList";
import CustomRoomSheduleGrid from "../../../../src/components/Customs/CustomRoomScheduleGrid";
import CustomText from "../../../../src/components/Customs/CustomText";
import CustomYoutubePlayer from "../../../../src/components/Customs/CustomYoutubePlayer";
import {
  EmployeeList,
  GetRoomByIdResponse,
} from "../../../../src/interfaces/consulting/consulting.interface";
import ProfileSkeleton from "../../../../src/components/Skeletons/ProfileSkeleton";

const getRoomById = async ({
  queryKey,
}: {
  queryKey: [string, string];
}): Promise<GetRoomByIdResponse> => {
  const id = queryKey[1];
  const response = await api.get(`/Consultorio/GetAsync/${id}`);

  return response.data;
};

const getRoomEmployees = async ({
  queryKey,
}: {
  queryKey: [string, string];
}): Promise<EmployeeList> => {
  const id = queryKey[1];
  const response = await api.get(`/Empleados/EquipoPorConsultorio/${id}`);

  return response.data;
};

type MySearchParams = {
  id: string;
};

const RoomsById = () => {
  const { id } = useLocalSearchParams() as MySearchParams;

  const getRoomByIdQuery = useQuery({
    queryKey: ["roomById", id],
    queryFn: getRoomById,
  });

  const getRoomEmployeesQuery = useQuery({
    queryKey: ["roomEmployees", id],
    queryFn: getRoomEmployees,
  });

  console.log(getRoomEmployeesQuery.data);

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      refreshControl={
        <RefreshControl
          refreshing={getRoomByIdQuery.isRefetching}
          onRefresh={() => getRoomByIdQuery.refetch()}
        />
      }
    >
      {getRoomByIdQuery.isPending ? (
        <ProfileSkeleton />
      ) : (
        <View style={{ paddingBottom: 96, flex: 1 }}>
          <CustomCover
            imgSrc={getRoomByIdQuery.data?.offices.image!}
            title={getRoomByIdQuery.data?.offices.description!}
            htmlContent={getRoomByIdQuery.data?.offices.descent!}
            titleColor={COLORS.secondary}
          />

          {/* VIDEO */}
          {getRoomByIdQuery.data?.offices.video && (
            <CustomYoutubePlayer
              videoId={getRoomByIdQuery.data?.offices.video}
            />
          )}

          {/* SCHEDULES */}
          <View style={{ gap: 16 }}>
            <CustomText
              style={{
                fontSize: 20,
                textTransform: "uppercase",
                paddingHorizontal: 16,
                color: COLORS.primary,
              }}
            >
              Horarios
            </CustomText>
            {getRoomByIdQuery.data?.schedulesOffices.length === 0 ? (
              <CustomText
                style={{
                  paddingHorizontal: 16,
                  color: COLORS.secondary,
                }}
              >
                No hay horarios cargados
              </CustomText>
            ) : (
              <>
                <CustomAccordion
                  title={getRoomByIdQuery.data?.offices.description!}
                  content={
                    <CustomRoomSheduleGrid
                      data={getRoomByIdQuery.data?.schedulesOffices!}
                    />
                  }
                />
              </>
            )}
          </View>

          {/* TEACHERS */}
          {getRoomEmployeesQuery.data &&
            getRoomEmployeesQuery.data?.length > 0 && (
              <View style={{ gap: 16, marginTop: 16, flex: 1 }}>
                <CustomText
                  style={{
                    fontSize: 20,
                    textTransform: "uppercase",
                    paddingHorizontal: 16,
                    color: COLORS.primary,
                  }}
                >
                  Equipo
                </CustomText>

                <CustomRoomEmployeeList
                  data={getRoomEmployeesQuery.data!}
                  query={getRoomEmployeesQuery}
                />
              </View>
            )}
        </View>
      )}
    </ScrollView>
  );
};

export default RoomsById;
