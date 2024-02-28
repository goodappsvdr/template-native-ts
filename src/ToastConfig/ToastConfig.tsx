import {
  BaseToastProps,
  ErrorToast,
  InfoToast,
  SuccessToast,
} from "react-native-toast-message";
import { COLORS } from "../Constants/Colors";

export const toastConfig = {
  /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
  success: (props: BaseToastProps) => (
    <SuccessToast
      {...props}
      style={{ borderLeftColor: COLORS.primary }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
      }}
    />
  ),

  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
  loading: (props: BaseToastProps) => (
    <InfoToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
      style={{ borderLeftColor: COLORS.disabledBg }}
    />
  ),
};
