import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation, Stack } from "expo-router";

const NewsLayout = () => {
  const navigation = useNavigation() as DrawerNavigationProp<{}>;
  return (
    <>
      <Stack
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
        }}
      >
        <Stack.Screen name="[id]" />
      </Stack>
    </>
  );
};

export default NewsLayout;
