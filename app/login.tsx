import { Link, Stack } from "expo-router";
import { StyleSheet, TextInput } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import KeyboardView from "@/components/KeyboardView";
import { ThemedCard } from "@/components/ThemedCard";

export default function Login() {
  return (
    <KeyboardView>
      <ThemedCard style={{ backgroundColor: "red", padding: 20 }}>
        <TextInput
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "gray",
            borderRadius: 14,
            marginTop: 40,
          }}
        ></TextInput>
      </ThemedCard>
    </KeyboardView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
