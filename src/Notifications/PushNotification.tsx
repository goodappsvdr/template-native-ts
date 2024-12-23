import React, { useEffect, useRef, useState } from "react";
import { View, Text, Button, Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { useAuthStore } from "../zustand/authStore";
import * as SecureStore from "expo-secure-store";
import GeneralLoader from "../components/Skeletons/GeneralLoader";

type Props = {
  children: React.ReactNode;
};

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function registerForPushNotificationsAsync(): Promise<
  string | undefined
> {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return "";
    }
    // Learn more about projectId:
    // https://docs.expo.dev/push-notifications/push-notifications-setup/#configure-projectid
    token = (
      await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig?.extra!.eas.projectId,
      })
    ).data;

    useAuthStore.getState().setExpoToken(token);

    await SecureStore.setItemAsync("expoToken", token);

    return token;
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}

export default function PushNotificationLayout({ children }: Props) {
  const [expoPushToken, setExpoPushToken] = useState<string | undefined>("");
  const [notification, setNotification] = useState<
    Notifications.Notification | boolean
  >(false);
  const notificationListener = useRef<Notifications.Subscription | undefined>();
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener(
        (notification: Notifications.Notification) => {
          setNotification(notification);
        }
      );

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log({ response });
      });

    return () => {
      if (notificationListener.current !== undefined) {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
        if (responseListener.current !== undefined) {
          Notifications.removeNotificationSubscription(
            responseListener.current
          );
        }
      }
    };
  }, []);

  return children;
}
