import { Stack } from "expo-router";
import DissmissKeyboard from "../src/components/Utils/DissmissKeyboard/DissmissKeyboard";
import { Background } from "../src/components/Background/Background";
import BackroundYellow from "../src/components/Background/BackroundYellow";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AxiosInterceptor } from "../src/api/axios.interceptor";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { View } from "react-native";

AxiosInterceptor();

export const unstable_settings = {
  initialRouteName: "home",
};

const RootLayout = () => {
  const queryClient = new QueryClient();
  const [fontsLoaded, fontError] = useFonts({
    "Montserrat-Black": require("../assets/fonts/Montserrat-Black.ttf"),
    "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      console.log("font loaded");
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Stack
          initialRouteName="home"
          screenOptions={{
            gestureEnabled: false,
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="login"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(drawer)"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </View>
    </QueryClientProvider>
  );
};

export default RootLayout;
