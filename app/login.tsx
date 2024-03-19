import {
  ActivityIndicator,
  FlatList,
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
import CustomLoginFooter from "../src/components/Customs/CustomLoginFooter";
import { COLORS } from "../src/Constants/Colors";

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
    loginMutation.mutate(form.getValues());
  };

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: async (data) => {
      setAccessToken(data.token);
      await SecureStoreSetItemAsync("token", data.token);
      router.push("/home");
    },
    onError: (error) => {
      console.log(error.message);
    },
  });
  const { register, handleSubmit, control } = form;

  function generateWhatsappText(texto: string) {
    var numeroTelefono = "5493543540516"; // Coloca aquí el número de teléfono
    var textoCodificado = encodeURIComponent(texto); // Codifica el texto usando encodeURIComponent
    var enlace =
      "https://api.whatsapp.com/send/?phone=" +
      numeroTelefono +
      "&text=" +
      textoCodificado;
    return enlace;
  }
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <DissmissKeyboard>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <BackroundYellow />
          <View style={styles.container}>
            <View style={{ gap: 16 }}>
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

              <Link
                href={generateWhatsappText(
                  "Hola! Olvidé mi usuario y contraseña para ingresar a la app Eos…"
                )}
                style={styles.forgetLink}
              >
                <CustomText style={{ textTransform: "uppercase" }}>
                  Olvidé mi usuario
                </CustomText>
              </Link>

              <Pressable
                onPress={handleSubmit(submitForm)}
                disabled={loginMutation.isPending}
                style={
                  loginMutation.isPending
                    ? styles.submitBtnDisabled
                    : ({ pressed }) => [
                        { backgroundColor: pressed ? "#de8e02" : "#fab60a" },

                        styles.submitBtn,
                      ]
                }
              >
                {
                  // si esta en estado pendiente muestra el loader
                  loginMutation.isPending ? (
                    <ActivityIndicator color="#fff" />
                  ) : (
                    <CustomText style={[styles.submitBtnText]}>
                      Continuar
                    </CustomText>
                  )
                }
              </Pressable>

              <View
                style={{
                  marginTop: 0,
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <CustomText
                  style={{
                    textAlign: "center",
                    fontSize: 12,
                  }}
                >
                  ¿Aún no sos usuario de Eos Distrito Deportivo?
                </CustomText>

                <Link
                  href={generateWhatsappText(
                    "Hola! Quiero ser socio de EOS CLUB…"
                  )}
                >
                  <CustomText style={{ textTransform: "uppercase" }}>
                    Registrate aquí
                  </CustomText>
                </Link>
              </View>

              {/* Footer   */}
            </View>
          </View>
          <CustomText style={styles.subtitle}>
            La felicidad se entrena
          </CustomText>
          <CustomLoginFooter />
        </ScrollView>
      </DissmissKeyboard>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    paddingTop: 0,
    paddingBottom: 0,
    gap: 16,
    width: "100%",
    display: "flex",
    position: "relative",
    backgroundColor: "#fff0000",
    justifyContent: "center",
  },
  title: {
    fontSize: 36,
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
  submitBtnDisabled: {
    backgroundColor: COLORS.disabledBg,
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
