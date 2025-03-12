import { dashboardSlice } from "@features/dashboard-state";
import { themeModeSlice } from "@features/theme-mode-state";
import { userSlice } from "@features/user-state";
import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "@shared/api";

export const reducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [dashboardSlice.reducerPath]: dashboardSlice.reducer,
  [themeModeSlice.reducerPath]: themeModeSlice.reducer,
  [userSlice.reducerPath]: userSlice.reducer,
});

export const whitelist = [
  dashboardSlice.reducerPath,
  themeModeSlice.reducerPath,
  userSlice.reducerPath,
];
