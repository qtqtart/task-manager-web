import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isAuth: boolean;
}

const initialState: AuthState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "authState",
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<Partial<AuthState>>) => {
      return { ...state, ...payload };
    },
  },
});
