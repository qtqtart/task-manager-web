import { useRootDispatch, useRootSelector } from "@app/store";
import { useCallback } from "react";

import { authSlice, AuthState } from "./slice";

export const useAuthState = () => {
  const authState = useRootSelector((s) => s.authState);

  const d = useRootDispatch();
  const set = useCallback(
    (payload: Partial<AuthState>) => {
      d(authSlice.actions.set(payload));
    },
    [d],
  );

  return { ...authState, set };
};
