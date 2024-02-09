import { useState } from "react";
import { FieldError, Noop } from "react-hook-form";
import { Text, TextInput, TextProps, View, ViewStyle } from "react-native";

import { StyleSheet } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { InputType } from "./types";

const AnimatedText = Animated.createAnimatedComponent(TextInput);

interface FilledInputProps {
  label: string;
  onBlur: Noop;
  onChangeText: (...event: any[]) => void;
  value: string;
  error?: FieldError | undefined;
  placeholder?: string;
  shrink?: boolean;
  type?: InputType;
  endAdornment?: React.ReactNode;
  sx?: ViewStyle;
  labelSx?: ViewStyle;
}

export const FilledInput = ({
  label,
  placeholder,
  onBlur,
  onChangeText,
  value,
  error,
  shrink = false,
  type = "text",
  endAdornment,
  sx,
  labelSx,
}: FilledInputProps) => {
  const [shrinkState, setShrinkState] = useState(shrink);

  const labelStyle = useAnimatedStyle(() => {
    return {
      top: shrinkState ? 1 : 10,
      fontSize: shrinkState ? 10 : 16,
    };
  });

  if (error) {
    console.log(error);
  }

  return (
    <View>
      <View style={styles.inputContainer}>
        <AnimatedText style={[styles.label, labelStyle]}>{label}</AnimatedText>

        <TextInput
          style={[styles.input]}
          secureTextEntry={type === "password"}
          keyboardType={type === "email" ? "email-address" : "default"}
          onChangeText={onChangeText}
          onFocus={() => {
            setShrinkState(true);
            // si hay value entonces se mueve
          }}
          onBlur={() => {
            onBlur();
            if (!value) {
              // vuelve al estado original
              setShrinkState(false);
            }
          }}
          placeholder={shrinkState ? (value ? "" : placeholder) : ""}
        />
        {
          // si hay un endAdornment se muestra
          Boolean(endAdornment) && (
            <View style={styles.endAdornment}>{endAdornment}</View>
          )
        }
      </View>
      {
        // si hay un error se muestra
        error && <Text style={styles.errorMessage}>{error.message}</Text>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#ffff",
    color: "#000",
    height: 48,
    borderRadius: 4,
    overflow: "hidden",
    width: "100%",
    position: "relative",
    display: "flex",
  },
  label: {
    color: "#000",
    position: "absolute",
    left: 8,
  },
  input: {
    flex: 1,
    color: "#000",
    fontSize: 16,
    width: "100%",
    height: "100%",
    paddingTop: 8,
    paddingLeft: 8,
  },
  endAdornment: {
    position: "absolute",
    right: 8,
    flex: 1,
    zIndex: 5,
    marginVertical: 12,
  },
  errorMessage: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
});
