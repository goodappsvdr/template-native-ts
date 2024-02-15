import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
// import { FilledInput } from "../src/FilledTextField/FilledTextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, router, useNavigation } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import DissmissKeyboard from "../src/components/Utils/DissmissKeyboard/DissmissKeyboard";
import { CustomTextField } from "../src/components/Inputs/CustomTextField/CustomTextField";
import { Ionicons } from "@expo/vector-icons";
import { UserIcon } from "../src/components/Icons/UserIcon";
import { PasswordIcon } from "../src/components/Icons/PasswordIcon";
import { Background } from "../src/components/Background/Background";
import BackroundYellow from "../src/components/Background/BackroundYellow";

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigation();
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const submitForm = () => {
    console.log("submitting form");

    router.push("/home");
  };
  const { register, handleSubmit, control } = form;

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <DissmissKeyboard>
        <ScrollView style={{ flex: 1, position: "relative" }}>
          <BackroundYellow />
          <View style={styles.container}>
            <Text style={styles.title}>Bienvenido!</Text>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({
                field: { onChange, onBlur, value },
                fieldState: { error },
              }) => (
                <CustomTextField
                  onBlur={onBlur}
                  onChangeText={onChange}
                  error={error}
                  type="text"
                  placeholder="Usuario"
                  startAdorment={
                    <UserIcon fill={"#000"} height={20} width={20} />
                  }
                />
              )}
              name="username"
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
                <CustomTextField
                  onBlur={onBlur}
                  onChangeText={onChange}
                  error={error}
                  type={showPassword ? "text" : "password"}
                  placeholder="Contraseña"
                  startAdorment={
                    <PasswordIcon fill={"#000"} height={20} width={20} />
                  }
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
                          <Ionicons
                            name="eye-outline"
                            size={24}
                            color={"black"}
                          />
                        )}
                      </Text>
                    </Pressable>
                  }
                />
              )}
              name="password"
            />

            <Link href={"/forgetuser"} style={styles.forgetLink}>
              <Text style={{ fontWeight: "bold" }}>Olvidé mi usuario</Text>
            </Link>

            <Pressable
              onPress={handleSubmit(submitForm)}
              style={({ pressed }) => [
                { backgroundColor: pressed ? "#de8e02" : "#fab60a" },
                styles.submitBtn,
              ]}
            >
              <Text style={[styles.submitBtnText]}>Continuar</Text>
            </Pressable>

            <View
              style={{
                marginTop: 32,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>¿Aún no sos usuario de Eos Distrito Deportivo?</Text>

              <Link href="/register">
                <Text style={{ fontWeight: "900", textTransform: "uppercase" }}>
                  Registrate aquí
                </Text>
              </Link>
            </View>

            <Text style={styles.subtitle}>La felicidad se entrena</Text>
          </View>
        </ScrollView>
      </DissmissKeyboard>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    paddingTop: 64,
    gap: 16,
    width: "100%",
    display: "flex",
    position: "relative",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 54,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 32,
  },
  subtitle: {
    marginTop: 32,
    fontSize: 24,
    textAlign: "center",
    fontWeight: "900",
    textTransform: "uppercase",
    color: "#38434D",
  },

  forgetLink: {
    width: "100%",
    textAlign: "right",
  },

  preseable: {
    color: "#000",
  },
  submitBtn: {
    // backgroundColor: "#242424",
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  submitBtnText: {
    color: "#fff",
    fontWeight: "900",
    textTransform: "uppercase",
  },
});
