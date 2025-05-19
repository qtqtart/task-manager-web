import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

export const authStateSlice = createSlice({
  name: "authState",
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<AuthState>) => {
      state.isAuthenticated = payload.isAuthenticated;
    },
  },
});

export const authStateActions = authStateSlice.actions;
