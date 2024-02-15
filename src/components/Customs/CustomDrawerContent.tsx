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

export default function CustomDrawerContent(props: any) {
  const router = useRouter();
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: top }}
      >
        {/* <DrawerItemList {...props} /> */}

        {/* LOGO */}
        <View
          style={{
            marginHorizontal: 16,
          }}
        >
          <Text
            style={{
              color: "#000",
              fontSize: 50,
              fontWeight: "bold",
            }}
          >
            LOGO
          </Text>
        </View>

        {/* USUARIO Y FOTO DE PERFIL */}
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

          <Text
            style={{
              fontSize: 16,
              fontWeight: "900",
              textTransform: "uppercase",
              flex: 1,
              flexWrap: "wrap",
            }}
          >
            Marisa Pérez
          </Text>
          {/* flecha */}
          <View>
            <GoBackIcon
              fill={"#000"}
              height={16}
              width={16}
              style={{
                transform: [{ rotate: "180deg" }],
              }}
            />
          </View>
        </View>

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
                <Text
                  style={{
                    color: COLORS.secondary,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                  numberOfLines={1}
                >
                  Inicio
                </Text>
              );
            }}
            onPress={() => {
              router.push("/home");
            }}
            icon={({ focused, color, size }) => {
              return (
                <HomeIcon
                  fill={color}
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
                <Text
                  style={{
                    color: COLORS.secondary,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                  numberOfLines={1}
                >
                  Perfil
                </Text>
              );
            }}
            onPress={() => {
              router.push("/profile");
            }}
            icon={({ focused, color, size }) => {
              return (
                <ProfileIcon
                  fill={color}
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
                <Text
                  style={{
                    color: COLORS.secondary,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                  numberOfLines={1}
                >
                  Cerrar sesión
                </Text>
              );
            }}
            onPress={() => {
              router.push("/");
            }}
            icon={({ focused, color, size }) => {
              return (
                <CloseSesion
                  fill={color}
                  height={24}
                  width={24}
                  style={{ marginRight: -16 }}
                />
              );
            }}
          />
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
                <Text
                  style={{
                    color: COLORS.secondary,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                  numberOfLines={1}
                >
                  Disciplinas
                </Text>
              );
            }}
            onPress={() => {
              router.push("/diciplines");
            }}
            icon={({ focused, color, size }) => {
              return (
                <DiciplinesIcon
                  fill={color}
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
                <Text
                  style={{
                    color: COLORS.secondary,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                  numberOfLines={1}
                >
                  Consultorios
                </Text>
              );
            }}
            onPress={() => {
              router.push("/consulting-rooms");
            }}
            icon={({ focused, color, size }) => {
              return (
                <ConsultingRoomsIcon
                  fill={color}
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
                <Text
                  style={{
                    color: COLORS.secondary,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                  numberOfLines={1}
                >
                  Noticias
                </Text>
              );
            }}
            onPress={() => {
              router.push("/news");
            }}
            icon={({ focused, color, size }) => {
              return (
                <NewsIcon
                  fill={color}
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
                <Text
                  style={{
                    color: COLORS.secondary,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                  numberOfLines={1}
                >
                  Reclamos
                </Text>
              );
            }}
            onPress={() => {
              router.push("/");
            }}
            icon={({ focused, color, size }) => {
              return (
                <ClaimsIcon
                  fill={color}
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
                <Text
                  style={{
                    color: COLORS.secondary,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                  numberOfLines={1}
                >
                  Videos
                </Text>
              );
            }}
            onPress={() => {
              router.push("/");
            }}
            icon={({ focused, color, size }) => {
              return (
                <VideosIcon
                  fill={color}
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
          }}
        >
          <DrawerItem
            label={({ focused, color }) => {
              return (
                <Text
                  style={{
                    color: COLORS.secondary,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                  numberOfLines={1}
                >
                  Eos club
                </Text>
              );
            }}
            onPress={() => {
              router.push("/home");
            }}
          />
          <DrawerItem
            label={({ focused, color }) => {
              return (
                <Text
                  style={{
                    color: COLORS.secondary,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                  numberOfLines={1}
                >
                  Eos store
                </Text>
              );
            }}
            onPress={() => {
              router.push("/home");
            }}
          />
          <DrawerItem
            label={({ focused, color }) => {
              return (
                <Text
                  style={{
                    color: COLORS.secondary,
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                  numberOfLines={1}
                >
                  eos gestión
                </Text>
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
