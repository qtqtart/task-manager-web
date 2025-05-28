import { authSlice } from "@features/auth/auth-state";
import { projectFiltersSlice } from "@features/project/project-filters-state";
import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "@shared/api";

export const reducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  //
  [authSlice.reducerPath]: authSlice.reducer,
  [projectFiltersSlice.reducerPath]: projectFiltersSlice.reducer,
});

export const whitelist = [authSlice.reducerPath];
