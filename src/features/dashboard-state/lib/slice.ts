import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DashboardState {
  isOpenDashboard: boolean;
}

const initialState: DashboardState = {
  isOpenDashboard: true,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<DashboardState>) => {
      state.isOpenDashboard = payload.isOpenDashboard;
    },
    toggle: (state) => {
      state.isOpenDashboard = !state.isOpenDashboard;
    },
  },
});
