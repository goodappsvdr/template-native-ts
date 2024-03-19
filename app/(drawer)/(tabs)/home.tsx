import React from "react";
import { ScrollView, View } from "react-native";
import CarrouselCovers from "../../../src/components/Home/CarrouselCovers";
import NewDisciplines from "../../../src/components/Home/NewDisciplines";
import CarrouselLastNews from "../../../src/components/Home/CarrouselLastNews";

const Home = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1, paddingBottom: 96 }}>
        {/* Nuevas disciplinas */}
        <NewDisciplines />

        {/* Carrousel portadas */}

        <CarrouselCovers />

        {/* carrousel ultimas noticias */}
        <CarrouselLastNews />
      </View>
    </ScrollView>
  );
};

export default Home;
