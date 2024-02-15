import { Stack } from "expo-router";
import DissmissKeyboard from "../src/components/Utils/DissmissKeyboard/DissmissKeyboard";
import { Background } from "../src/components/Background/Background";
import BackroundYellow from "../src/components/Background/BackroundYellow";

const RootLayout = () => {
  return (
    <>
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
    </>
  );
};

export default RootLayout;
