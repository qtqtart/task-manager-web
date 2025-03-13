import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JwtPayload } from "jwt-decode";

export interface AuthState {
  jwtPayload?: JwtPayload;
  accessToken?: string;
}

const initialState: AuthState = {
  jwtPayload: undefined,
  accessToken: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<AuthState>) => {
      state.jwtPayload = payload.jwtPayload;
      state.accessToken = payload.accessToken;
    },
  },
});
