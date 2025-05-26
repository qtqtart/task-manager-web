import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isAuth: boolean;
}

const initialState: AuthState = {
  isAuth: false,
};

export const authStateSlice = createSlice({
  name: "authState",
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<AuthState>) => {
      state.isAuth = payload.isAuth;
    },
  },
});
