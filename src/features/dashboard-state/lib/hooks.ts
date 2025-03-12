import { useRootDispatch, useRootSelector } from "@app/store";
import { useCallback } from "react";

import { dashboardSlice, DashboardState } from "./slice";

export const useDashboard = () => {
  const dispatch = useRootDispatch();
  const { isOpenDashboard } = useRootSelector((state) => state.dashboard);

  const setDashbord = useCallback(
    (state: DashboardState) => {
      dispatch(dashboardSlice.actions.set(state));
    },
    [dispatch],
  );

  const toggleDashboard = useCallback(() => {
    dispatch(dashboardSlice.actions.toggle());
  }, [dispatch]);

  return {
    isOpenDashboard,
    setDashbord,
    toggleDashboard,
  };
};
