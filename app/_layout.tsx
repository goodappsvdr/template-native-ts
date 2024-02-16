import { Stack } from "expo-router";
import DissmissKeyboard from "../src/components/Utils/DissmissKeyboard/DissmissKeyboard";
import { Background } from "../src/components/Background/Background";
import BackroundYellow from "../src/components/Background/BackroundYellow";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AxiosInterceptor } from "../src/api/axios.interceptor";

AxiosInterceptor();

const RootLayout = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
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
          name="(drawer)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
};

export default RootLayout;
