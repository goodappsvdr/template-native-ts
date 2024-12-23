import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import {
  useGlobalSearchParams,
  useLocalSearchParams,
  usePathname,
  useRouter,
} from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
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
const userMasculino = require("../../../assets/UserMasculino.png");
const userFemenino = require("../../../assets/UserFemenino.png");

export default function CustomDrawerContent(props: any) {
  const router = useRouter();
  const params = useGlobalSearchParams();
  const pathname = usePathname();
  const { user } = useAuthStore();
  const { top, bottom } = useSafeAreaInsets();

  const userImg = user?.image.match("/UserFemenino.svg")
    ? userFemenino
    : user?.image.match("/UserMasculino.svg")
    ? userMasculino
    : { uri: user?.image };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        style={{ flex: 1, flexDirection: "column" }}
        {...props}
        contentContainerStyle={{ paddingTop: top, flexGrow: 1 }}
      >
        {/* <DrawerItemList {...props} /> */}
        <View
          style={{
            flex: 1,
            display: "flex",
          }}
        >
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
            <Pressable
              onPress={() => {
                if (pathname === "/profile") {
                  return;
                } else if (pathname === "reclamos") {
                  router.replace("/profile");
                }
                router.push("/profile");
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  gap: 16,
                  elevation: 2,
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 1,
                  backgroundColor: "#fff",
                  borderRadius: 12,
                  padding: 16,
                  marginHorizontal: 16,
                }}
              >
                <Image
                  source={userImg}
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
                  {user.name}
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
            </Pressable>
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
                if (pathname === "/home") {
                  return;
                }
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
                if (pathname === "/profile") {
                  return;
                } else if (pathname === "reclamos") {
                  router.replace("/profile");
                }
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
                  router.replace("/logout");
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
                if (pathname === "/disciplines") {
                  return;
                }
                router.push("/disciplines");
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
                if (pathname === "/consulting-rooms") {
                  return;
                }
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
                if (pathname === "/news") {
                  return;
                }
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
              <>
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
                    router.navigate("/profile-stack/claims");
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
              </>
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
                router.push(
                  "https://www.youtube.com/@eosdistritodeportivo/videos"
                );
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
                if (user) {
                  // navegar a este link con el dni del usuario

                  //eosclub.com.ar/webApp/FrmLogin.aspx?DNI=18172886

                  router.push(
                    `https://eosclub.com.ar/webApp/FrmLogin.aspx?DNI=${user.dni}`
                  );
                } else {
                  router.push(`https://eosclub.com.ar`);
                }
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
                router.push("https://eosdistritodeportivo.store/");
              }}
            />
            {/* <DrawerItem
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
          /> */}
          </View>

          {/* FOOTER */}

          <View style={{ marginTop: "auto" }}>
            <FooterBackgroundDrawer bottom={bottom} />
          </View>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
