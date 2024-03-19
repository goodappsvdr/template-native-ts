import {
  RefreshControl,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { api } from "../../../../src/api/api";
import {
  News,
  NewsImageList,
  NewsList,
  NewsVideoAndImage,
} from "../../../../src/interfaces/news/news.interface";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import { ScrollView } from "react-native-gesture-handler";
import NewsByIdCover from "../../../../src/components/News/NewsByIdCover";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import CustomYoutubePlayer from "../../../../src/components/Customs/CustomYoutubePlayer";
import CustomRenderHtml from "../../../../src/components/Customs/CustomRenderHtml";
import NewsTopImages from "../../../../src/components/News/NewsTopImages";
import NewsBottomImages from "../../../../src/components/News/NewsBottomImages";
import ProfileSkeleton from "../../../../src/components/Skeletons/ProfileSkeleton";

const getNewsById = async ({
  queryKey,
}: {
  queryKey: [string, string];
}): Promise<NewsList> => {
  const id = queryKey[1];
  const response = await api.get(`/Noticias/GetFront/${id}`);

  return response.data;
};

const getVideoAndImage = async ({
  queryKey,
}: {
  queryKey: [string, string];
}): Promise<NewsVideoAndImage> => {
  const id = queryKey[1];
  const response = await api.get(`/NoticiasImagenes/GetVideoAndImage/${id}`);

  return response.data;
};

const getNewsImages = async ({
  queryKey,
}: {
  queryKey: [string, string];
}): Promise<NewsImageList> => {
  const id = queryKey[1];
  const response = await api.get(`/NoticiasImagenes/GetImage/${id}`);

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
  const getNewsVideoAndImageQuery = useQuery({
    queryKey: ["newsVideoAndImage", id],
    queryFn: getVideoAndImage,
  });
  const getNewsImagesQuery = useQuery({
    queryKey: ["newsImages", id],
    queryFn: getNewsImages,
  });

  const refresh = () => {
    getNewsByIdQuery.refetch();
    getNewsVideoAndImageQuery.refetch();
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      {getNewsByIdQuery.isError ? (
        <Text>Error al cargar la noticia</Text>
      ) : getNewsByIdQuery.isFetching ? (
        <ProfileSkeleton />
      ) : getNewsByIdQuery.data?.length === 0 ? (
        <Text>No hay noticia</Text>
      ) : (
        <View style={{ flex: 1, paddingBottom: 96 }}>
          <NewsByIdCover
            imgSrc={getNewsByIdQuery.data![0].imagenPrincipalCelular}
            title={getNewsByIdQuery.data![0].titulo}
            subtitle={getNewsByIdQuery.data![0].subTitulo}
            url={`https://eosdistritodeportivo.com/Noticias/NoticiasDetalle/ID=${
              getNewsByIdQuery.data![0].idNoticia
            }`}
          />

          {getNewsVideoAndImageQuery.data?.video && (
            <CustomYoutubePlayer
              videoId={getNewsVideoAndImageQuery.data?.video}
            />
          )}

          {getNewsImagesQuery.data && getNewsImagesQuery.data.length > 1 && (
            <NewsTopImages images={getNewsImagesQuery.data.slice(0, 2)} />
          )}
          {/* Texto contenido */}
          <CustomRenderHtml
            htmlContent={getNewsByIdQuery.data![0].contenido!}
            width={width}
          />

          {getNewsImagesQuery.data && getNewsImagesQuery.data.length > 1 && (
            <NewsBottomImages images={getNewsImagesQuery.data.slice(2)} />
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default NewsById;

const styles = StyleSheet.create({});
