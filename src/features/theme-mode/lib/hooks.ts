import { useRootDispatch, useRootSelector } from "@app/store";
import { useCallback } from "react";

import { themeModeSlice, ThemeModeState } from "./slice";

export const useThemeMode = () => {
  const dispatch = useRootDispatch();
  const { themeMode } = useRootSelector((state) => state.themeMode);

  const setThemeMode = useCallback(
    (state: ThemeModeState) => {
      dispatch(themeModeSlice.actions.set(state));
    },
    [dispatch],
  );

  const toggleThemeMode = useCallback(() => {
    dispatch(themeModeSlice.actions.toggle());
  }, [dispatch]);

  return {
    themeMode,
    setThemeMode,
    toggleThemeMode,
  };
};
