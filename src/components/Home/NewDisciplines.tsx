import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import CustomText from "../Customs/CustomText";
import { COLORS } from "../../Constants/Colors";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../api/api";
import { GetNewDisciplinesResponse } from "../../interfaces/home/home.interface";
import { router } from "expo-router";
import NewDisciplinesSkeleton from "../Skeletons/NewDisciplinesSkeleton";

const getNewDisciplines = async (): Promise<GetNewDisciplinesResponse> => {
  const response = await api.get("/DiciplinaImagen/Get");

  return response.data;
};

type Props = {};

const NewDisciplines = (props: Props) => {
  const getNewDisciplinesQuery = useQuery({
    queryKey: ["newDisciplines"],
    queryFn: getNewDisciplines,
  });

  return (
    <>
      {getNewDisciplinesQuery.isLoading ? (
        <NewDisciplinesSkeleton />
      ) : getNewDisciplinesQuery.data &&
        getNewDisciplinesQuery.data.length > 0 ? (
        <View style={{ marginBottom: 16 }}>
          {/* header */}
          <View style={{ paddingTop: 32, paddingBottom: 16 }}>
            <CustomText
              style={{
                color: COLORS.primary,
                fontSize: 32,
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Nuevas disciplinas
            </CustomText>
          </View>
          {/* Lista de nuevas disciplinas */}

          <View style={{ paddingHorizontal: 16, gap: 16 }}>
            {getNewDisciplinesQuery.data.map((discipline, index) => (
              <View key={index} style={{ width: "100%" }}>
                <TouchableOpacity
                  activeOpacity={0.95}
                  onPress={() =>
                    router.navigate(
                      {
                        pathname: `/disciplines-stack/${discipline.idDisciplina}`,
                      }
                      // `/diciplines/${discipline.idDisciplina}`
                    )
                  }
                >
                  <Image
                    source={{
                      uri: discipline.imagen,
                    }}
                    style={{ width: "100%", aspectRatio: 566 / 473 }}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      ) : null}
    </>
  );
};

export default NewDisciplines;

const styles = StyleSheet.create({});
