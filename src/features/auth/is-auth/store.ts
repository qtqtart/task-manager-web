import { LOCAL_STORAGE_KEYS } from "@shared/consts/local-storage-keys";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface IsAuthStore {
  isAuthenticated: boolean;
  set: (isAuthenticated: boolean) => void;
}

export const useIsAuthStore = create<IsAuthStore>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      set: (isAuthenticated) => set(() => ({ isAuthenticated })),
    }),
    {
      name: LOCAL_STORAGE_KEYS.IS_AUTH,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
