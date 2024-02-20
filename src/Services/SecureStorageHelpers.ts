import * as SecureStore from "expo-secure-store";

export const SecureStoreGetItemAsync = async (key: string) => {
  return await SecureStore.getItemAsync(key);
};

export const SecureStoreSetItemAsync = async (key: string, value: string) => {
  console.log("guarde", key, value);
  return await SecureStore.setItemAsync(key, value);
};
