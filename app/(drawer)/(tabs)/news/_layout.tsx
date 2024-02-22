import { Stack, useNavigation } from "expo-router";
import CustomHeader from "../../../../src/components/Customs/CustomHeader";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const NewsLayout = () => {
  const navigation = useNavigation() as DrawerNavigationProp<{}>;
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
        <Stack.Screen name="[id]" />
      </Stack>
    </>
  );
};

export default NewsLayout;
