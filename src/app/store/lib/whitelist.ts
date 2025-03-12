import { dashboardSlice } from "@features/dashboard-state";
import { themeModeSlice } from "@features/theme-mode-state";
import { userSlice } from "@features/user-state";

export const whitelist = [
  dashboardSlice.reducerPath,
  themeModeSlice.reducerPath,
  userSlice.reducerPath,
];
