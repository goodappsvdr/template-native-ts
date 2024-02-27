import { Redirect, Stack, router, useNavigation } from "expo-router";
import CustomHeader from "../../../../src/components/Customs/CustomHeader";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useAuthStore } from "../../../../src/zustand/authStore";

const ProfileLayout = () => {
  const { isAuth } = useAuthStore();

  if (!isAuth) {
    return <Redirect href={"/login"} />;
  }
  return (
    <>
      <Stack
        screenOptions={{
          gestureEnabled: false,
          header: () => {
            return <CustomHeader goBackEnabled={true} />;
          },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="new-claim" />
        <Stack.Screen name="claims" />
      </Stack>
    </>
  );
};

export default ProfileLayout;
