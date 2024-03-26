import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import {
  useWindowDimensions,
  ScrollView,
  RefreshControl,
  View,
} from "react-native";
import { COLORS } from "../../src/Constants/Colors";
import { api } from "../../src/api/api";
import CustomAccordion from "../../src/components/Customs/CustomAccordion";
import CustomCover from "../../src/components/Customs/CustomCover";
import CustomInvestmentGrid from "../../src/components/Customs/CustomInvestmentGrid";
import CustomPaymentMehods from "../../src/components/Customs/CustomPaymentMehods";
import CustomRenderHtml from "../../src/components/Customs/CustomRenderHtml";
import CustomSheduleGrid from "../../src/components/Customs/CustomSheduleGrid";
import CustomTeacherList from "../../src/components/Customs/CustomTeacherList";
import CustomText from "../../src/components/Customs/CustomText";
import CustomYoutubePlayer from "../../src/components/Customs/CustomYoutubePlayer";
import ProfileSkeleton from "../../src/components/Skeletons/ProfileSkeleton";
import { DisciplineByIdResponse } from "../../src/interfaces/disciplines/disciplines.interface";

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
  const { width } = useWindowDimensions();
  const { id } = params;

  const getDiciplineByIdQuery = useQuery({
    queryKey: ["diciplineById", id],
    queryFn: getDiciplineById,
  });

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      refreshControl={
        <RefreshControl
          refreshing={getDiciplineByIdQuery.isRefetching}
          onRefresh={() => getDiciplineByIdQuery.refetch()}
        />
      }
    >
      {getDiciplineByIdQuery.isPending ? (
        <ProfileSkeleton />
      ) : (
        <View style={{ flex: 1, paddingBottom: 96 }}>
          {/* COVER */}
          {/* <Text>{getDiciplineByIdQuery.data?.disciplines.content}</Text> */}
          <CustomCover
            imgSrc={getDiciplineByIdQuery.data?.disciplines.image!}
            title={getDiciplineByIdQuery.data?.disciplines.description!}
            htmlContent={getDiciplineByIdQuery.data?.disciplines.descent!}
          />

          {/* VIDEO */}
          {getDiciplineByIdQuery.data?.disciplines.video && (
            <CustomYoutubePlayer
              videoId={getDiciplineByIdQuery.data?.disciplines.video}
            />
          )}

          {/* Texto content */}
          <CustomRenderHtml
            htmlContent={getDiciplineByIdQuery.data?.disciplines.content!}
            width={width}
          />

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
            {getDiciplineByIdQuery.data?.schedulesDisciplines.length === 0 ? (
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
                {getDiciplineByIdQuery.data?.schedulesDisciplines.map(
                  (schedule) => {
                    return (
                      <CustomAccordion
                        key={schedule.idScheduleLevel}
                        title={schedule.level}
                        content={
                          <CustomSheduleGrid data={schedule.schedules} />
                        }
                      />
                    );
                  }
                )}
              </>
            )}
          </View>

          {/* PRICES */}
          <View style={{ gap: 16, marginTop: 16 }}>
            <CustomText
              style={{
                fontSize: 20,
                textTransform: "uppercase",
                paddingHorizontal: 16,
                color: COLORS.primary,
              }}
            >
              Inversión
            </CustomText>
            {getDiciplineByIdQuery.data?.investmentsDisciplines.length === 0 ? (
              <CustomText
                style={{
                  paddingHorizontal: 16,
                  color: COLORS.secondary,
                }}
              >
                No hay inversiones cargados
              </CustomText>
            ) : (
              <>
                {getDiciplineByIdQuery.data?.investmentsDisciplines.map(
                  (investment) => {
                    return (
                      <CustomAccordion
                        key={investment.idAge}
                        title={investment.age}
                        content={
                          <CustomInvestmentGrid data={investment.investments} />
                        }
                      />
                    );
                  }
                )}
              </>
            )}
          </View>

          {/* METODOS DE PAGO */}
          <CustomPaymentMehods />

          {/* TEACHERS */}
          <View style={{ gap: 16, marginTop: 16 }}>
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
            {getDiciplineByIdQuery.data?.equipmentsDisciplines.length === 0 ? (
              <CustomText
                style={{
                  paddingHorizontal: 16,
                  color: COLORS.secondary,
                }}
              >
                No hay miembros del equipo cargados
              </CustomText>
            ) : (
              <CustomTeacherList
                data={getDiciplineByIdQuery.data?.equipmentsDisciplines!}
              />
            )}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default DiciplinesByID;
