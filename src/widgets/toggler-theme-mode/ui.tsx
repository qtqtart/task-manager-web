import { ThemeModeState, useThemeMode } from "@features/theme-mode";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { FC, useCallback } from "react";

import { useOptions } from "./lib/hooks";

export const TogglerThemeMode: FC = () => {
  const { themeMode, setThemeMode } = useThemeMode();
  const { options } = useOptions();

  const handleChange = useCallback(
    (_: unknown, value: ThemeModeState["themeMode"]) => {
      setThemeMode(value);
    },
    [setThemeMode],
  );

  return (
    <ToggleButtonGroup
      fullWidth
      exclusive
      value={themeMode}
      onChange={handleChange}
    >
      {options.map(({ icon, value }) => (
        <ToggleButton key={value} value={value}>
          {icon}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
