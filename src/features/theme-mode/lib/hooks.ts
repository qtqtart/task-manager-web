import { useRootDispatch, useRootSelector } from "@app/store";

import { themeModeSlice, ThemeModeState } from "./slice";

export const useThemeMode = () => {
  const dispatch = useRootDispatch();
  const { themeMode } = useRootSelector((state) => state.themeMode);
  const setThemeMode = (state: ThemeModeState["themeMode"]) => {
    dispatch(themeModeSlice.actions.set(state));
  };

  return {
    themeMode,
    setThemeMode,
  };
};
