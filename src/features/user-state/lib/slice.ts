import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { JwtPayload } from "@shared/types/jwt-payload";

export interface UserState {
  jwtPayload?: JwtPayload;
  accessToken?: string;
}

const initialState: UserState = {
  jwtPayload: undefined,
  accessToken: "zxc",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<UserState>) => {
      state.jwtPayload = payload.jwtPayload;
      state.accessToken = payload.accessToken;
    },
  },
});
