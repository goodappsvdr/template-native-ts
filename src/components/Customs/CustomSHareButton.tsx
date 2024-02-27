import React, { useState } from "react";
import {
  View,
  Button,
  Modal,
  TouchableOpacity,
  Text,
  Pressable,
  Share,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../Constants/Colors";

type ShareButtonProps = {
  url: string;
  title: string;
};

const ShareButton = ({ url, title }: ShareButtonProps) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: title + " " + url,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("shared with activity type of", result.activityType);
        } else {
          console.log("shared");
        }
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Pressable
      onPress={onShare}
      style={{
        backgroundColor: COLORS.secondary,
        borderRadius: 9999,
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Feather name="share-2" size={24} color="white" />
    </Pressable>
  );
};

export default ShareButton;
