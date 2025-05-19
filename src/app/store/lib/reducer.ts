import { authStateSlice } from "@features/auth/auth-state";
import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "@shared/api";

export const reducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  //
  [authStateSlice.reducerPath]: authStateSlice.reducer,
});

export const whitelist = [authStateSlice.reducerPath];
