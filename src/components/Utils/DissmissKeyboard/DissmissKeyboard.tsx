import React from "react";
import { Keyboard, Touchable, TouchableWithoutFeedback } from "react-native";

const DissmissKeyboard = ({ children }: { children: React.ReactNode }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    {children}
  </TouchableWithoutFeedback>
);

export default DissmissKeyboard;
