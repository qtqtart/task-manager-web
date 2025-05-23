import {
  SupportedColorScheme,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  useColorScheme,
} from "@mui/material";
import { MouseEvent } from "react";

import { THEME_MODE_OPTIONS } from "../consts";

export const ToggleThemeMode = () => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const handleChange = (
    _: MouseEvent<HTMLElement>,
    v: SupportedColorScheme,
  ) => {
    setColorScheme(v);
  };

  return (
    <ToggleButtonGroup
      fullWidth
      exclusive
      color="primary"
      value={colorScheme}
      onChange={handleChange}
    >
      {THEME_MODE_OPTIONS.map((option) => (
        <Tooltip key={option.value} title={option.label}>
          <ToggleButton value={option.value}>{option.icon}</ToggleButton>
        </Tooltip>
      ))}
    </ToggleButtonGroup>
  );
};
