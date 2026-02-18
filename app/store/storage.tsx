import { createMMKV } from "react-native-mmkv";
import { createJSONStorage as createZustandStorage } from "zustand/middleware";

const storage = createMMKV({
  id: "app-storage",
  encryptionKey: "demo-setup",
});

export const zustandStorage = createZustandStorage(() => ({
  setItem: (name, value) => {
    try {
      storage.set(name, value);
      return true;
    } catch {
      return false;
    }
  },
  getItem: (name: string) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name: string) => {
    return storage.remove(name);
  },
}));
