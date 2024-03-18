import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import CustomText from "../../../../src/components/Customs/CustomText";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CustomTextField } from "../../../../src/components/Inputs/CustomTextField/CustomTextField";
import { COLORS } from "../../../../src/Constants/Colors";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../../../src/api/api";
import { useAuthStore } from "../../../../src/zustand/authStore";
import Toast from "react-native-toast-message";
import { router } from "expo-router";

const claimSchema = z.object({
  descripcion: z
    .string()
    .min(1, { message: "El reclamo no puede estar vacio" }),
});

const sendClaim = async (data: IFormInput) => {
  const date = new Date();
  data.fecha = date.toISOString();

  console.log(data.fecha);

  const response = await api.post("/Reclamos/SaveOrUpdate", data);
  return response.data;
};
type Props = {};

interface IFormInput {
  idCliente: number;
  fecha: string;
  descripcion: string;
  idEstado: number;
}

const newCLaim = (props: Props) => {
  const { user } = useAuthStore();
  const queryClient = useQueryClient();

  const form = useForm({
    defaultValues: {
      idCliente: user?.idClient,
      descripcion: "",
      fecha: "",
      idEstado: 0,
    } as IFormInput,
    resolver: zodResolver(claimSchema),
  });

  const submitForm = () => {
    console.log(form.getValues());
    sendClaimMutation.mutate(form.getValues());
  };

  const sendClaimMutation = useMutation({
    mutationFn: sendClaim,
    onMutate: (variables) => {
      Toast.show({
        type: "loading",
        text1: "Enviando reclamo...",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["claims", user!.idClient!] });
      Toast.show({
        type: "success",
        text1: "Reclamo enviado",
      });
      router.navigate("/profile/claims");
      form.reset();
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        text1: "Error al enviar el reclamo",
      });
      console.log("Error al enviar el reclamo", error);
    },
  });

  const { register, handleSubmit, control } = form;
  return (
    <View>
      {/* Header */}
      <View style={{ paddingTop: 32, paddingBottom: 16 }}>
        <CustomText
          style={{
            color: COLORS.primary,
            fontSize: 32,
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Nuevo reclamo
        </CustomText>
      </View>

      {/* FORMULARIO */}
      <View style={{ padding: 16, gap: 16 }}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <>
              <TextInput
                style={{
                  backgroundColor: "#fff",
                  elevation: 1,
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.1,
                  shadowRadius: 1,
                  padding: 8,
                  minHeight: 200,
                }}
                placeholder="Escriba aqui..."
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                multiline={true}
                textAlignVertical="top"
                numberOfLines={10}
              />
              {
                // si hay un error se muestra
                error && (
                  <CustomText style={{ color: "#ff0000" }}>
                    {error.message!}
                  </CustomText>
                )
              }
            </>
          )}
          name="descripcion"
        />

        <Pressable
          onPress={handleSubmit(submitForm)}
          disabled={sendClaimMutation.isPending}
          style={({ pressed }) => [
            {
              padding: 16,
              paddingHorizontal: 32,
              borderRadius: 8,
              elevation: 1,
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              shadowRadius: 1,
              backgroundColor: sendClaimMutation.isPending
                ? COLORS.disabledBg
                : pressed
                ? "#de8e02"
                : "#fab60a",

              alignItems: "center",
              width: "auto",
              alignSelf: "flex-end",
            },
          ]}
        >
          {
            // si esta en estado pendiente muestra el loader
            sendClaimMutation.isPending ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <CustomText
                style={{
                  color: "#fff",
                  textTransform: "uppercase",
                  width: "auto",
                }}
              >
                Enviar
              </CustomText>
            )
          }
        </Pressable>
      </View>
    </View>
  );
};

export default newCLaim;

const styles = StyleSheet.create({});
