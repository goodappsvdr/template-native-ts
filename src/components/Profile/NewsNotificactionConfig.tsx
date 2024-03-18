import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomSwitchLabel from "../Customs/CustomSwitch&Label";
import { COLORS } from "../../Constants/Colors";
import { useMutation } from "@tanstack/react-query";
import { api } from "../../api/api";
import { useAuthStore } from "../../zustand/authStore";
import { getAsyncResponse } from "../../interfaces/expoToken/expoToken.interface";
import { router } from "expo-router";

const updateNotifications = async (body: any) => {
  console.log(body);
  const response = await api.put<getAsyncResponse>(
    "/TokenExpo/UpdateAsync",
    body
  );
  return response.data;
};

type Props = {};

const NewsNotificactionConfig = (props: Props) => {
  const { notifications, user, setNotificacions } = useAuthStore();

  console.log(notifications);

  const changeNotifications = useMutation({
    mutationFn: updateNotifications,
    onSuccess: (data) => {
      setNotificacions(data.tokenExpo);
    },
    onError: (error: Error) => {
      const status = (error as any).response.status;

      if (status === 401) {
        return router.push("logout");
      }

      console.log(error);

      // router.push("logout");
    },
  });

  const toggleSwitch = () => {
    changeNotifications.mutate({
      idTokenExpoPush: notifications?.idTokenExpoPush,
      idCliente: user?.idClient,
      token: notifications?.token,
      active: notifications?.active ? false : true,
    });
  };

  return (
    <CustomSwitchLabel
      label="Noticias y eventos"
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        padding: 8,
        marginTop: 32,
        marginHorizontal: 16,
        paddingLeft: 16,
        elevation: 1,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
      }}
      value={notifications?.active || false}
      labelStyles={{
        color: COLORS.secondary,
        textTransform: "uppercase",
        fontSize: 20,
        fontFamily: "Montserrat-Black",
      }}
      onChange={toggleSwitch}
      switchProps={{
        trackColor: { false: COLORS.disabledBg, true: COLORS.primarylight },
        thumbColor: COLORS.primary,
      }}
    />
  );
};

export default NewsNotificactionConfig;

const styles = StyleSheet.create({});
