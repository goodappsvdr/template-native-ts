import { Redirect, Stack } from "expo-router";
import { useAuthStore } from "../../src/zustand/authStore";
import CustomHeader from "../../src/components/Customs/CustomHeader";

const ProfileLayout = () => {
  const { isAuth } = useAuthStore();

  if (!isAuth) {
    return <Redirect href={"/login"} />;
  }
  return (
    <>
      <Stack
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
        }}
      >
        <Stack.Screen name="new-claim" />
        <Stack.Screen name="claims" />
      </Stack>
    </>
  );
};

export default ProfileLayout;
