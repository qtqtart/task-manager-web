import { useRootDispatch, useRootSelector } from "@app/store";
import { useCallback } from "react";

import { AuthState, authStateActions } from "./slice";

export const useAuthState = () => {
  const { isAuthenticated } = useRootSelector((s) => s.authState);
  const d = useRootDispatch();

  const set = useCallback(
    (v: AuthState["isAuthenticated"]) => {
      d(authStateActions.set({ isAuthenticated: v }));
    },
    [d],
  );

  return {
    isAuthenticated,
    set,
  };
};
