import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ScrollView, Text, View, useWindowDimensions } from "react-native";
import { api } from "../../../../src/api/api";
import { DisciplineByIdResponse } from "../../../../src/interfaces/disciplines/disciplines.interface";
import RenderHTML, { HTMLSource } from "react-native-render-html";
import CustomCover from "../../../../src/components/Customs/CustomCover";
import CustomYoutubePlayer from "../../../../src/components/Customs/CustomYoutubePlayer";
import CustomRenderHtml from "../../../../src/components/Customs/CustomRenderHtml";
import CustomAccordion from "../../../../src/components/Customs/CustomAccordion";
import CustomText from "../../../../src/components/Customs/CustomText";
import { COLORS } from "../../../../src/Constants/Colors";
import CustomSheduleGrid from "../../../../src/components/Customs/CustomSheduleGrid";
import CustomInvestmentGrid from "../../../../src/components/Customs/CustomInvestmentGrid";
import CustomTeacherList from "../../../../src/components/Customs/CustomTeacherList";
import CustomPaymentMehods from "../../../../src/components/Customs/CustomPaymentMehods";

const getDiciplineById = async ({
  queryKey,
}: {
  queryKey: [string, string];
}): Promise<DisciplineByIdResponse> => {
  const id = queryKey[1];
  const response = await api.get(`/DisciplinaHome/GetAsync/${id}`);

  console.log({ response: response.data });
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
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      {getDiciplineByIdQuery.isPending ? (
        <Text>Cargando...</Text>
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
