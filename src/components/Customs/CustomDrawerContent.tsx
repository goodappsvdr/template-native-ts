import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GoBackIcon from "../Icons/GoBackIcon";
import { COLORS } from "../../Constants/Colors";
import { G } from "react-native-svg";
import HomeIcon from "../Icons/HomeIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import CloseSesion from "../Icons/CloseSesion";
import DiciplinesIcon from "../Icons/DiciplinesIcon";
import ConsultingRoomsIcon from "../Icons/ConsultingRoomsIcon";
import NewsIcon from "../Icons/NewsIcon";
import ClaimsIcon from "../Icons/ClaimsIcon";
import VideosIcon from "../Icons/VideosIcon";
import FooterBackgroundDrawer from "../Background/FooterBackgroundDrawer";
import { useAuthStore } from "../../zustand/authStore";
import CustomText from "./CustomText";
import LogoGris from "../Icons/LogoGris";

export default function CustomDrawerContent(props: any) {
  const router = useRouter();
  const { user } = useAuthStore();
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        style={{ flex: 1, flexDirection: "column" }}
        {...props}
        contentContainerStyle={{ paddingTop: top }}
      >
        {/* <DrawerItemList {...props} /> */}

        {/* LOGO */}
        <View
          style={{
            marginHorizontal: 16,
            marginBottom: 16,
          }}
        >
          <LogoGris width={160} height={80} />
        </View>

        {/* USUARIO Y FOTO DE PERFIL */}
        {user && (
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              gap: 16,
              elevation: 2,
              backgroundColor: "#fff",
              borderRadius: 12,
              padding: 16,
              marginHorizontal: 16,
            }}
          >
            <Image
              source={{
                uri: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg",
              }}
              style={{
                width: 74,
                height: 74,
                borderRadius: 99999,
              }}
            />

            <CustomText
              style={{
                fontSize: 16,
                textTransform: "uppercase",
                color: COLORS.secondary,
                flex: 1,
                flexWrap: "wrap",
              }}
            >
              {user.unique_name}
            </CustomText>
            {/* flecha */}
            <View>
              <GoBackIcon
                fill={COLORS.secondary}
                height={16}
                width={16}
                style={{
                  transform: [{ rotate: "180deg" }],
                }}
              />
            </View>
          </View>
        )}

        {/* MENU 1 INICIO/PERFIL/CERRARSESION */}
        <View
          style={{
            borderBottomColor: COLORS.secondary,
            borderBottomWidth: 0.5,
            marginHorizontal: 16,
            paddingVertical: 8,
          }}
        >
          <DrawerItem
            label={({ focused, color }) => {
              return (
                <CustomText
                  style={{
                    color: COLORS.secondary,
                    textTransform: "uppercase",

                    fontSize: 16,
                  }}
                  numberOfLines={1}
                >
                  Inicio
                </CustomText>
              );
            }}
            onPress={() => {
              router.push("/home");
            }}
            icon={({ focused, color, size }) => {
              return (
                <HomeIcon
                  fill={COLORS.secondary}
                  height={24}
                  width={24}
                  style={{ marginRight: -16 }}
                />
              );
            }}
          />
          <DrawerItem
            label={({ focused, color }) => {
              return (
                <CustomText
                  style={{
                    color: COLORS.secondary,
                    textTransform: "uppercase",
                    fontSize: 16,
                  }}
                  numberOfLines={1}
                >
                  Perfil
                </CustomText>
              );
            }}
            onPress={() => {
              router.push("/profile");
            }}
            icon={({ focused, color, size }) => {
              return (
                <ProfileIcon
                  fill={COLORS.secondary}
                  height={24}
                  width={24}
                  style={{ marginRight: -16 }}
                />
              );
            }}
          />
          {user ? (
            <DrawerItem
              label={({ focused, color }) => {
                return (
                  <CustomText
                    style={{
                      color: COLORS.secondary,
                      textTransform: "uppercase",
                      fontSize: 16,
                    }}
                    numberOfLines={1}
                  >
                    Cerrar sesión
                  </CustomText>
                );
              }}
              onPress={() => {
                router.push("/logout");
              }}
              icon={({ focused, color, size }) => {
                return (
                  <CloseSesion
                    fill={COLORS.secondary}
                    height={24}
                    width={24}
                    style={{ marginRight: -16 }}
                  />
                );
              }}
            />
          ) : (
            <DrawerItem
              label={({ focused, color }) => {
                return (
                  <CustomText
                    style={{
                      color: COLORS.secondary,
                      textTransform: "uppercase",
                      fontSize: 16,
                    }}
                    numberOfLines={1}
                  >
                    Iniciar sesión
                  </CustomText>
                );
              }}
              onPress={() => {
                router.push("/login");
              }}
              icon={({ focused, color, size }) => {
                return (
                  <CloseSesion
                    fill={COLORS.secondary}
                    height={24}
                    width={24}
                    style={{ marginRight: -16 }}
                  />
                );
              }}
            />
          )}
        </View>

        {/* MENU 2 DISCIPLINAS/CONSULTORIOS/NOTICIAS/VIDEOS/RECLAMOS */}
        <View
          style={{
            borderBottomColor: COLORS.secondary,
            borderBottomWidth: 0.5,
            marginHorizontal: 16,
            paddingVertical: 8,
          }}
        >
          <DrawerItem
            label={({ focused, color }) => {
              return (
                <CustomText
                  style={{
                    color: COLORS.secondary,
                    textTransform: "uppercase",
                    fontSize: 16,
                  }}
                  numberOfLines={1}
                >
                  Disciplinas
                </CustomText>
              );
            }}
            onPress={() => {
              router.push("/diciplines");
            }}
            icon={({ focused, color, size }) => {
              return (
                <DiciplinesIcon
                  fill={COLORS.secondary}
                  height={24}
                  width={24}
                  style={{ marginRight: -16 }}
                />
              );
            }}
          />
          <DrawerItem
            label={({ focused, color }) => {
              return (
                <CustomText
                  style={{
                    color: COLORS.secondary,
                    textTransform: "uppercase",
                    fontSize: 16,
                  }}
                  numberOfLines={1}
                >
                  Consultorios
                </CustomText>
              );
            }}
            onPress={() => {
              router.push("/consulting-rooms");
            }}
            icon={({ focused, color, size }) => {
              return (
                <ConsultingRoomsIcon
                  fill={COLORS.secondary}
                  height={24}
                  width={24}
                  style={{ marginRight: -16 }}
                />
              );
            }}
          />
          <DrawerItem
            label={({ focused, color }) => {
              return (
                <CustomText
                  style={{
                    color: COLORS.secondary,
                    textTransform: "uppercase",
                    fontSize: 16,
                  }}
                  numberOfLines={1}
                >
                  Noticias
                </CustomText>
              );
            }}
            onPress={() => {
              router.push("/news");
            }}
            icon={({ focused, color, size }) => {
              return (
                <NewsIcon
                  fill={COLORS.secondary}
                  height={24}
                  width={24}
                  style={{ marginRight: -16 }}
                />
              );
            }}
          />
          {user && (
            <DrawerItem
              label={({ focused, color }) => {
                return (
                  <CustomText
                    style={{
                      color: COLORS.secondary,
                      textTransform: "uppercase",

                      fontSize: 16,
                    }}
                    numberOfLines={1}
                  >
                    Reclamos
                  </CustomText>
                );
              }}
              onPress={() => {
                router.push("/");
              }}
              icon={({ focused, color, size }) => {
                return (
                  <ClaimsIcon
                    fill={COLORS.secondary}
                    height={24}
                    width={24}
                    style={{ marginRight: -16 }}
                  />
                );
              }}
            />
          )}
          <DrawerItem
            label={({ focused, color }) => {
              return (
                <CustomText
                  style={{
                    color: COLORS.secondary,
                    textTransform: "uppercase",

                    fontSize: 16,
                  }}
                  numberOfLines={1}
                >
                  Videos
                </CustomText>
              );
            }}
            onPress={() => {
              router.push("/");
            }}
            icon={({ focused, color, size }) => {
              return (
                <VideosIcon
                  fill={COLORS.secondary}
                  height={24}
                  width={24}
                  style={{ marginRight: -16 }}
                />
              );
            }}
          />
        </View>

        {/* MENU 3 EOS CLUB / EOSSTORE/ EOSGESTION */}

        <View
          style={{
            marginHorizontal: 16,
            paddingVertical: 8,
            marginBottom: "auto",
          }}
        >
          <DrawerItem
            label={({ focused, color }) => {
              return (
                <CustomText
                  style={{
                    color: COLORS.secondary,
                    textTransform: "uppercase",

                    fontSize: 16,
                  }}
                  numberOfLines={1}
                >
                  Eos club
                </CustomText>
              );
            }}
            onPress={() => {
              console.log({ user });
            }}
          />
          <DrawerItem
            label={({ focused, color }) => {
              return (
                <CustomText
                  style={{
                    color: COLORS.secondary,
                    textTransform: "uppercase",

                    fontSize: 16,
                  }}
                  numberOfLines={1}
                >
                  Eos store
                </CustomText>
              );
            }}
            onPress={() => {
              router.push("/home");
            }}
          />
          <DrawerItem
            label={({ focused, color }) => {
              return (
                <CustomText
                  style={{
                    color: COLORS.secondary,
                    textTransform: "uppercase",

                    fontSize: 16,
                  }}
                  numberOfLines={1}
                >
                  eos gestión
                </CustomText>
              );
            }}
            onPress={() => {
              router.push("/home");
            }}
          />
        </View>

        {/* FOOTER */}

        <FooterBackgroundDrawer bottom={bottom} />
      </DrawerContentScrollView>
    </View>
  );
}
