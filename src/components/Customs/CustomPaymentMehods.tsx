import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
const LogoCordobesa = require("../../../assets/logocordobesa.png");
const LogoMasterCard = require("../../../assets/logomastercard.png");
const LogoMercadoPago = require("../../../assets/logomercadopago.png");
const LogoVisa = require("../../../assets/logovisa.png");

type Props = {};

const CustomPaymentMehods = (props: Props) => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 16,
        paddingHorizontal: 16,
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 1, alignItems: "center", padding: 8 }}>
        <Image
          source={LogoMasterCard}
          style={{ width: "100%", resizeMode: "contain" }}
        />
      </View>
      <View style={{ flex: 1, alignItems: "center", padding: 8 }}>
        <Image
          source={LogoMercadoPago}
          style={{ width: "100%", resizeMode: "contain" }}
        />
      </View>
      <View style={{ flex: 1, alignItems: "center", padding: 8 }}>
        <Image
          source={LogoCordobesa}
          style={{ width: "100%", resizeMode: "contain" }}
        />
      </View>
      <View style={{ flex: 1, alignItems: "center", padding: 8 }}>
        <Image
          source={LogoVisa}
          style={{ width: "100%", resizeMode: "contain" }}
        />
      </View>
    </View>
  );
};

export default CustomPaymentMehods;

const styles = StyleSheet.create({});
