import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import React from "react";

const KeyboardView = ({ children }: { children: React.ReactNode }) => (
  <KeyboardAvoidingView
    style={{
      flex: 1,
      paddingTop: 40,
    }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      {children}
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

export default KeyboardView;
