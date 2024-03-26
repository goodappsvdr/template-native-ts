import { Stack, useNavigation } from "expo-router";
import CustomHeader from "../../src/components/Customs/CustomHeader";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const ConsultingLayout = () => {
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

export default ConsultingLayout;
