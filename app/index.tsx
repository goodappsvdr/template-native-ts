import { Pressable, StyleSheet, Text, View } from "react-native";
// import { FilledInput } from "../src/FilledTextField/FilledTextField";
import Ionicons from "@expo/vector-icons/Ionicons";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { FilledInput } from "../src/FilledTextField/FilledTextField";

const loginSchema = z.object({
  email: z.string().email({ message: "Email invalido" }),
  password: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const submitForm = () => {
    console.log("submitting form");
  };
  const { register, handleSubmit, control } = form;

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <FilledInput
              label={"Email"}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={error}
              type="email"
              sx={{
                backgroundColor: "#f0f0f0",
              }}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <FilledInput
              label={"Contraseña"}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={error}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <Pressable onPress={togglePassword}>
                  <Text style={styles.preseable}>
                    {showPassword ? (
                      <Ionicons
                        name="eye-off-outline"
                        size={24}
                        color={"black"}
                      />
                    ) : (
                      <Ionicons name="eye-outline" size={24} color={"black"} />
                    )}
                  </Text>
                </Pressable>
              }
            />
          )}
          name="password"
        />
        <Pressable
          onPress={handleSubmit(submitForm)}
          style={({ pressed }) => [
            { backgroundColor: pressed ? "#181818" : "#242424" },
            styles.submitBtn,
          ]}
        >
          <Text style={[styles.submitBtnText]}>Iniciar sesión</Text>
        </Pressable>
        <Link href="/home" style={{ marginTop: 24 }}>
          <Text>Ir a Home</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#998119",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  main: {
    justifyContent: "center",
    gap: 16,
    width: "100%",
    marginHorizontal: "auto",
    backgroundColor: "#fff",
    elevation: 1,
    padding: 16,
    borderRadius: 4,
    height: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  preseable: {
    color: "#000",
  },
  submitBtn: {
    // backgroundColor: "#242424",
    height: 48,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  submitBtnText: {
    color: "#fff",
  },
});
