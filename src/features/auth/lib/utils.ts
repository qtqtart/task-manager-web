import { store } from "@app/store";
import { authSlice } from "@features/auth";
import { jwtDecode, JwtPayload } from "jwt-decode";

export const setAccessToken = (accessToken: string) => {
  const jwtPayload = jwtDecode(accessToken) as JwtPayload;
  store.dispatch(
    authSlice.actions.set({
      accessToken,
      jwtPayload,
    }),
  );
};

export const removeAccessToken = () => {
  store.dispatch(
    authSlice.actions.set({
      accessToken: undefined,
      jwtPayload: undefined,
    }),
  );
};
