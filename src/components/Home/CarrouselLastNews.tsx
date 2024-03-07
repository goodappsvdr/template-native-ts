import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { NewsList } from "../../interfaces/news/news.interface";
import { api } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import { COLORS } from "../../Constants/Colors";
import Carousel from "pinar";
import NewsListCard from "../News/NewsListCard";
import CustomText from "../Customs/CustomText";

type Props = {};

const getAllNews = async (): Promise<NewsList> => {
  const response = await api.get("Noticias/GetFront");

  return response.data;
};

const CarrouselLastNews = (props: Props) => {
  const { width } = useWindowDimensions();
  const getAllNewsQuery = useQuery({
    queryKey: ["newsHome"],
    queryFn: getAllNews,
  });

  return (
    <>
      {getAllNewsQuery.isLoading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : getAllNewsQuery.data ? (
        <View style={{ paddingHorizontal: 16, paddingBottom: 32 }}>
          <View style={{ paddingTop: 32, paddingBottom: 16 }}>
            <CustomText
              style={{
                color: COLORS.primary,
                fontSize: 32,
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Ultimas noticias
            </CustomText>
          </View>
          <Carousel
            showsDots={getAllNewsQuery.data.length > 1 ? true : false}
            showsControls={false}
            dotsContainerStyle={{
              alignSelf: "center",
              marginTop: 8,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              bottom: -16,
              left: 0,
              right: 0,
            }}
            style={{ width: "100%", aspectRatio: 4 / 3 }}
            activeDotStyle={{
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              backgroundColor: COLORS.secondary,
            }}
            dotStyle={{
              backgroundColor: "rgba(0,0,0,.2)",
              width: 6,
              borderRadius: 3,
              height: 6,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          >
            {getAllNewsQuery.data.map((news) => {
              return (
                <View key={news.idNoticia}>
                  <NewsListCard news={news} />
                </View>
              );
            })}
          </Carousel>
        </View>
      ) : null}
    </>
  );
};

export default CarrouselLastNews;

const styles = StyleSheet.create({});
