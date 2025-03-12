import { store } from "@app/store";
import { userSlice } from "@features/user-state";
import { JwtPayload } from "@shared/types/jwt-payload";
import { jwtDecode } from "jwt-decode";

export const setAccessToken = (accessToken: string) => {
  const jwtPayload = jwtDecode(accessToken) as JwtPayload;
  store.dispatch(
    userSlice.actions.set({
      accessToken,
      jwtPayload,
    }),
  );
};

export const removeAccessToken = () => {
  store.dispatch(
    userSlice.actions.set({
      accessToken: undefined,
      jwtPayload: undefined,
    }),
  );
};
