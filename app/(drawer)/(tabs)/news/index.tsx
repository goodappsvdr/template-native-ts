import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { api } from "../../../../src/api/api";
import { useQuery } from "@tanstack/react-query";
import { NewsList } from "../../../../src/interfaces/news/news.interface";
import CustomText from "../../../../src/components/Customs/CustomText";
import NewsListCard from "../../../../src/components/News/NewsListCard";
import { COLORS } from "../../../../src/Constants/Colors";
import NewsListSkeleton from "../../../../src/components/Skeletons/NewsListSkeleton";

const getAllNews = async (): Promise<NewsList> => {
  const response = await api.get("Noticias/GetFront");

  return response.data;
};

type Props = {};

const News = (props: Props) => {
  const getAllNewsQuery = useQuery({
    queryKey: ["news"],
    queryFn: getAllNews,
  });

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={getAllNewsQuery.isRefetching}
          onRefresh={getAllNewsQuery.refetch}
        />
      }
    >
      {/* Header */}

      {/* Lista de Noticias */}
      {getAllNewsQuery.isFetching && !getAllNewsQuery.isRefetching ? (
        <NewsListSkeleton />
      ) : (
        <View style={{ flex: 1, paddingHorizontal: 16, paddingBottom: 96 }}>
          <CustomText
            style={{
              color: COLORS.primary,
              textTransform: "uppercase",
              textAlign: "center",
              fontSize: 32,
              paddingTop: 32,
              paddingBottom: 16,
            }}
          >
            Noticias y eventos
          </CustomText>

          {getAllNewsQuery.data?.length === 0 ? (
            <CustomText>No hay noticias</CustomText>
          ) : (
            <View style={{ flex: 1, gap: 16 }}>
              {getAllNewsQuery.data?.map((news) => {
                return <NewsListCard key={news.idNoticia} news={news} />;
              })}
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default News;

const styles = StyleSheet.create({});
