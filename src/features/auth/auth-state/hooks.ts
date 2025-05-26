import { useRootDispatch, useRootSelector } from "@app/store";
import { useCallback } from "react";

import { AuthState, authStateSlice } from "./slice";

export const useAuthState = () => {
  const authState = useRootSelector((s) => s.authState);

  const d = useRootDispatch();
  const set = useCallback(
    (isAuth: AuthState["isAuth"]) => {
      d(authStateSlice.actions.set({ isAuth }));
    },
    [d],
  );

  return { ...authState, set };
};
