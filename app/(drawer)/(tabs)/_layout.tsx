import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Stack, Tabs, useNavigation } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Pressable, Text, View } from "react-native";
import HomeIcon from "../../../src/components/Icons/HomeIcon";
import { COLORS } from "../../../src/Constants/Colors";
import DiciplinesIcon from "../../../src/components/Icons/DiciplinesIcon";
import ConsultingRoomsIcon from "../../../src/components/Icons/ConsultingRoomsIcon";
import NewsIcon from "../../../src/components/Icons/NewsIcon";
import ProfileIcon from "../../../src/components/Icons/ProfileIcon";
import MenuIcon from "../../../src/components/Icons/MenuIcon";
import GoBackIcon from "../../../src/components/Icons/GoBackIcon";
import { StatusBar } from "expo-status-bar";
import CustomHeader from "../../../src/components/Customs/CustomHeader";

const MainLayout = () => {
  const navigation = useNavigation() as DrawerNavigationProp<{}>;

  return (
    <>
      <StatusBar style={"light"} />
      <Tabs
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            bottom: 16,
            left: 16,
            right: 16,
            backgroundColor: "white",
            elevation: 2,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 1,
            borderRadius: 12,
            height: 64,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarInactiveTintColor: COLORS.secondary,
          tabBarActiveTintColor: COLORS.primary,
          tabBarLabelStyle: {
            fontFamily: "Montserrat-Black",
            textTransform: "uppercase",
            fontSize: 7,
            marginTop: "auto",
          },
          header: () => {
            return <CustomHeader goBackEnabled={false} />;
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            // headerShown: false,
            tabBarIcon: ({ focused }) => (
              <HomeIcon
                fill={focused ? COLORS.primary : COLORS.secondary}
                height={32}
                width={32}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="diciplines"
          options={{
            title: "Diciplinas",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <DiciplinesIcon
                fill={focused ? COLORS.primary : COLORS.secondary}
                height={32}
                width={32}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="consulting-rooms"
          options={{
            title: "Consultorios",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <ConsultingRoomsIcon
                fill={focused ? COLORS.primary : COLORS.secondary}
                height={32}
                width={32}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="news"
          options={{
            title: "Noticias",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <NewsIcon
                fill={focused ? COLORS.primary : COLORS.secondary}
                height={32}
                width={32}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Perfil",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <ProfileIcon
                fill={focused ? COLORS.primary : COLORS.secondary}
                height={32}
                width={32}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="drawer"
          options={{
            title: "Menu",
            // headerShown: false,
            tabBarIcon: ({ focused }) => (
              <MenuIcon
                fill={focused ? COLORS.primary : COLORS.secondary}
                height={32}
                width={32}
              />
            ),
          }}
          listeners={() => ({
            tabPress: (e) => {
              e.preventDefault();

              navigation.openDrawer();
            },
          })}
        />

        {/* necesito aca tener un boton que abra un drawer y nose tampoco donde poner el drawer menu */}
      </Tabs>
    </>
  );
};

export default MainLayout;
