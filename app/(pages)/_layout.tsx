import { Stack } from "expo-router";

const MainLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{
          headerTitle: "Home",
        }}
      />
    </Stack>
  );
};

export default MainLayout;
