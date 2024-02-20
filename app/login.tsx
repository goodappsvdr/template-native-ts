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
import { api } from "../src/api/api";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../src/zustand/authStore";
import * as SecureStore from "expo-secure-store";
import CustomText from "../src/components/Customs/CustomText";
import { SecureStoreSetItemAsync } from "../src/Services/SecureStorageHelpers";

interface IFormInput {
  email: string;
  dni: string;
}

const loginSchema = z.object({
  email: z.string().email().min(5),
  dni: z.string().min(5),
});

const loginUser = async (data: IFormInput) => {
  // crear el formData

  const formData = new FormData();
  formData.append("Email", data.email);
  formData.append("Dni", data.dni);

  const response = await api.post("/AuthNew/Login", formData);

  console.log(response.status);

  return response.data;
};

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigation();

  const { setAccessToken } = useAuthStore();

  const form = useForm({
    defaultValues: {
      email: "anaclara2786@gmail.com",
      dni: "18172886",
    },
    resolver: zodResolver(loginSchema),
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const submitForm = () => {
    console.log(form.getValues());
    loginMutation.mutate(form.getValues());
  };

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: async (data) => {
      console.log(data);
      setAccessToken(data.token);
      await SecureStoreSetItemAsync("token", data.token);
      router.push("/home");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
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
            <CustomText style={styles.title}>Bienvenido!</CustomText>
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
                  type="email"
                  placeholder="Email"
                  startAdorment={
                    <UserIcon fill={"#000"} height={20} width={20} />
                  }
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
                <CustomTextField
                  onBlur={onBlur}
                  onChangeText={onChange}
                  error={error}
                  type={showPassword ? "text" : "password"}
                  placeholder="DNI"
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
              name="dni"
            />

            <Link href={"/forgetuser"} style={styles.forgetLink}>
              <CustomText>Olvidé mi usuario</CustomText>
            </Link>

            <Pressable
              onPress={handleSubmit(submitForm)}
              style={({ pressed }) => [
                { backgroundColor: pressed ? "#de8e02" : "#fab60a" },
                styles.submitBtn,
              ]}
            >
              <CustomText style={[styles.submitBtnText]}>Continuar</CustomText>
            </Pressable>

            <View
              style={{
                marginTop: 32,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CustomText>
                ¿Aún no sos usuario de Eos Distrito Deportivo?
              </CustomText>

              <Link href="/register">
                <CustomText style={{ textTransform: "uppercase" }}>
                  Registrate aquí
                </CustomText>
              </Link>
            </View>

            <CustomText style={styles.subtitle}>
              La felicidad se entrena
            </CustomText>
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
    textAlign: "center",
    marginBottom: 32,
  },
  subtitle: {
    marginTop: 32,
    fontSize: 24,
    textAlign: "center",
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
    textTransform: "uppercase",
  },
});