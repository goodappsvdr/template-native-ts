import { useGlobalSearchParams, useRouter } from "expo-router";
import React, { useRef, useState } from "react";
import {
  Image,
  LayoutChangeEvent,
  PanResponder,
  Pressable,
  RefreshControl,
  ScrollView,
  View,
} from "react-native";
import { COLORS } from "../../../../src/Constants/Colors";
import CustomText from "../../../../src/components/Customs/CustomText";
import ClaimsList from "../../../../src/components/Profile/ClaimsList";
import NewsNotificactionConfig from "../../../../src/components/Profile/NewsNotificactionConfig";
import { useAuthStore } from "../../../../src/zustand/authStore";
import { useDateFormatter } from "../../../../src/hooks/useDateFormatter";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "../../../../src/api/api";
import { ClaimResponse } from "../../../../src/interfaces/auth/auth.interface";
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
const userMasculino = require("../../../../assets/UserMasculino.png");
const userFemenino = require("../../../../assets/UserFemenino.png");

const getClaims = async ({
  queryKey,
}: {
  queryKey: [string, number, number];
}): Promise<ClaimResponse> => {
  const [, idClient] = queryKey;
  const response = await api.get(`/Reclamos/GetAsync/${idClient},3`);
  return response.data;
};

const Profile = () => {
  // extraer de las props si viene la key reclamo
  const GlobalSearchParams = useGlobalSearchParams();
  const router = useRouter();

  const { user, contracts } = useAuthStore();
  const { formatDate } = useDateFormatter();

  const getClaimsQuery = useQuery({
    queryKey: ["claims", user!.idClient!, 3],
    queryFn: getClaims,
  });

  const userImg = user?.image.match("/UserFemenino.svg")
    ? userFemenino
    : user?.image.match("/UserMasculino.svg")
    ? userMasculino
    : { uri: user?.image };

  const refresh = () => {
    console.log("refreshing");
    getClaimsQuery.refetch();
  };

  return (
    <Animated.View>
      <Animated.View
        style={{
          position: "absolute",

          height: 96,
          backgroundColor: COLORS.primary,
        }}
      >
        <CustomText
          style={{
            fontSize: 24,
            color: "#fff",
            textAlign: "center",
            marginTop: 48,
          }}
        >
          solta para refrescar
        </CustomText>
      </Animated.View>
      <Animated.ScrollView
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={getClaimsQuery.isRefetching}
            onRefresh={refresh}
          />
        }
        scrollEventThrottle={16}
      >
        <View style={{ flex: 1, paddingBottom: 96 }}>
          {/* HEADER IMG */}
          <View style={{ alignItems: "center", paddingVertical: 32 }}>
            <Image
              source={userImg}
              style={{
                width: 136,
                height: 136,
                borderRadius: 99999,
              }}
            />
            {/* NOMBRE */}
            <CustomText
              style={{
                marginTop: 16,
                fontSize: 24,
                textTransform: "uppercase",
                color: COLORS.secondary,
              }}
            >
              {user!.name}
            </CustomText>
            {/* DNI */}
            <CustomText
              style={{
                fontSize: 20,
                fontFamily: "Montserrat-Regular",
                color: COLORS.secondary,
              }}
            >
              22.080.743
            </CustomText>
          </View>
          <View style={{ paddingHorizontal: 16 }}>
            {/* INFORMACIÓN */}
            <View
              style={{
                gap: 16,
                borderBottomColor: COLORS.secondary,
                borderBottomWidth: 0.5,
                paddingBottom: 32,
                paddingTop: 16,
              }}
            >
              <View>
                <CustomText
                  style={{
                    fontSize: 20,
                    marginBottom: 8,
                    textTransform: "uppercase",
                    color: COLORS.secondary,
                  }}
                >
                  Teléfono
                </CustomText>
                <CustomText
                  style={{
                    fontSize: 16,
                    fontFamily: "Montserrat-Regular",
                    color: COLORS.secondary,
                    paddingLeft: 16,
                  }}
                >
                  {user!.mobile}
                </CustomText>
              </View>
              <View>
                <CustomText
                  style={{
                    fontSize: 20,
                    marginBottom: 8,
                    textTransform: "uppercase",
                    color: COLORS.secondary,
                  }}
                >
                  Email
                </CustomText>
                <CustomText
                  style={{
                    fontSize: 16,
                    fontFamily: "Montserrat-Regular",
                    color: COLORS.secondary,
                    paddingLeft: 16,
                  }}
                >
                  {user!.email}
                </CustomText>
              </View>
            </View>
            {/* Planes activos  */}
            <View
              style={{
                gap: 16,
                borderBottomColor: COLORS.secondary,
                borderBottomWidth: 0.5,
                paddingBottom: 32,
                paddingTop: 16,
              }}
            >
              <CustomText
                style={{
                  fontSize: 20,
                  color: COLORS.primary,
                  textTransform: "uppercase",
                }}
              >
                Planes Activos
              </CustomText>
              {contracts.map((contract) => {
                return (
                  <View
                    style={{ paddingLeft: 16 }}
                    key={contract.idClientContract}
                  >
                    <CustomText
                      style={{
                        fontSize: 20,

                        textTransform: "uppercase",
                        color: COLORS.secondary,
                      }}
                    >
                      {contract.plan}
                    </CustomText>
                    <CustomText
                      style={{
                        fontSize: 14,
                        fontFamily: "Montserrat-Regular",
                        color: COLORS.secondary,
                      }}
                    >
                      {`Vence el ${formatDate(contract.endDate)}`}
                    </CustomText>
                  </View>
                );
              })}
            </View>
            {/* PLANES INCATIVOS  */}
            <View
              style={{
                gap: 16,
                borderBottomColor: COLORS.secondary,
                borderBottomWidth: 0.5,
                paddingBottom: 32,
                paddingTop: 16,
              }}
            >
              <CustomText
                style={{
                  fontSize: 20,
                  color: COLORS.primary,
                  textTransform: "uppercase",
                }}
              >
                Planes inactivos
              </CustomText>
              <CustomText
                style={{
                  textAlign: "left",
                  color: COLORS.disabledBg,
                  paddingLeft: 16,
                }}
              >
                No tienes planes inactivos
              </CustomText>
              {/* <View style={{ paddingLeft: 16 }}>
          <CustomText
          style={{
            fontSize: 20,
            
            textTransform: "uppercase",
            color: COLORS.secondary,
          }}
          >
            Natación
            </CustomText>
            <CustomText
            style={{
              fontSize: 14,
              fontFamily: "Montserrat-Regular",
              color: COLORS.secondary,
            }}
            >
            Vence el 28 de abril
          </CustomText>
          </View>
        <View style={{ paddingLeft: 16 }}>
          <CustomText
            style={{
              fontSize: 20,
              
              textTransform: "uppercase",
              color: COLORS.secondary,
            }}
            >
            Musculación
            </CustomText>
            <CustomText
            style={{
              fontSize: 14,
              fontFamily: "Montserrat-Regular",
              color: COLORS.secondary,
            }}
            >
            Vence el 28 de abril
            </CustomText>
          </View> */}
            </View>
          </View>
          {/* NOTIFICATION TOGLE */}
          <NewsNotificactionConfig />
          {/* RECLAMOS */}
          {getClaimsQuery.data?.claims && (
            <ClaimsList data={getClaimsQuery.data?.claims!} />
          )}
          <Pressable
            style={({ pressed }) => [
              { backgroundColor: pressed ? "#de8e02" : "#fab60a" },
              {
                padding: 16,
                paddingHorizontal: 32,
                marginRight: 16,
                borderRadius: 8,
                elevation: 1,

                alignItems: "center",
                width: "auto",
                alignSelf: "flex-end",
              },
            ]}
            onPress={() => {
              router.navigate("/profile/claims");
            }}
          >
            <CustomText
              style={{
                textTransform: "uppercase",
                color: "#fff",
                width: "auto",
              }}
            >
              Ver más
            </CustomText>
          </Pressable>
        </View>
      </Animated.ScrollView>
    </Animated.View>
  );
};

export default Profile;
