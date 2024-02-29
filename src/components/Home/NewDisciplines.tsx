import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "../Customs/CustomText";
import { COLORS } from "../../Constants/Colors";

type Props = {};

const NewDisciplines = (props: Props) => {
  return (
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
        <View style={{ width: "100%" }}>
          <Image
            source={{
              uri: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_42.jpg",
            }}
            style={{ width: "100%", aspectRatio: 4 / 3 }}
          />
        </View>
        <View style={{ width: "100%" }}>
          <Image
            source={{
              uri: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_42.jpg",
            }}
            style={{ width: "100%", aspectRatio: 4 / 3 }}
          />
        </View>
      </View>
    </View>
  );
};

export default NewDisciplines;

const styles = StyleSheet.create({});
