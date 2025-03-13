import { authSlice } from "@features/auth";
import { themeModeSlice } from "@features/theme-mode";
import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "@shared/api";

export const reducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  //
  [authSlice.reducerPath]: authSlice.reducer,
  [themeModeSlice.reducerPath]: themeModeSlice.reducer,
});

export const whitelist = [
  //
  authSlice.reducerPath,
  themeModeSlice.reducerPath,
];
