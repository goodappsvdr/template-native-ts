import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation, Stack } from "expo-router";
import CustomHeader from "../../src/components/Customs/CustomHeader";

const DiciplinesLayout = () => {
  const navigation = useNavigation() as DrawerNavigationProp<{}>;
  return (
    <>
      <Stack
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          // header: () => {
          //   return <CustomHeader goBackEnabled={true} />;
          // },
        }}
      >
        <Stack.Screen name="[id]" />
      </Stack>
    </>
  );
};

export default DiciplinesLayout;
