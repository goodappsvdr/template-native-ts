import React from "react";
import { Keyboard, Touchable, TouchableWithoutFeedback } from "react-native";

const DissmissKeyboard = ({ children }: { children: React.ReactNode }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
    {children}
  </TouchableWithoutFeedback>
);

export default DissmissKeyboard;
