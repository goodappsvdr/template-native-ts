import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CustomText from "../Customs/CustomText";
import { COLORS } from "../../Constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import ClaimAccordionCard from "./ClaimAccordionCard";
import { Claim } from "../../interfaces/auth/auth.interface";
import { useDateFormatter } from "../../hooks/useDateFormatter";

type Props = {
  withTitle?: boolean;
  data: Claim[] | [];
};

const ClaimsList = ({ withTitle = true, data }: Props) => {
  const { formatDateTime } = useDateFormatter();
  const redirectClaim = () => {
    router.navigate("/profile/new-claim");
  };

  return (
    <View style={{ marginTop: 32, paddingHorizontal: 16 }}>
      {/* HEADER */}
      <View
        style={{
          flexDirection: "row",

          alignItems: "center",
        }}
      >
        {withTitle && (
          <CustomText
            style={{
              color: COLORS.secondary,
              fontSize: 20,
              textTransform: "uppercase",
            }}
          >
            Reclamos
          </CustomText>
        )}

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={redirectClaim}
          style={{ marginLeft: "auto" }}
        >
          <FontAwesome name="plus-circle" size={28} color={COLORS.secondary} />
        </TouchableOpacity>
      </View>
      {/* LISTA */}

      <View style={{ paddingVertical: 16, gap: 16 }}>
        {/* Mensaje de no hay reclamos */}
        {
          // Si no hay reclamos
          data.length === 0 ? (
            <CustomText style={{ textAlign: "left", color: COLORS.disabledBg }}>
              No tienes reclamos realizados
            </CustomText>
          ) : (
            data.map((claim) => {
              return (
                <ClaimAccordionCard
                  key={claim.id}
                  title={`Fecha: ${formatDateTime(claim.date)}`}
                  content={claim.description}
                />
              );
            })
          )
        }
      </View>
    </View>
  );
};

export default ClaimsList;

const styles = StyleSheet.create({});
