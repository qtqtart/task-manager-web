import { createTheme as createMuiTheme } from "@mui/material";

import { ThemeOptions } from "../types";
import { breakpoints } from "./breakpoints";
import { components } from "./components";
import { customShadows } from "./custom-shadow";
import { palette } from "./palette";
import { shadows } from "./shadows";
import { typography } from "./typography";

export const createTheme = () => {
  const themeOptions: ThemeOptions = {
    shape: {
      borderRadius: 8,
    },
    colorSchemes: {
      light: {
        palette: palette.light,
        shadows: shadows.light,
        customShadows: customShadows.light,
      },
      dark: {
        palette: palette.dark,
        shadows: shadows.dark,
        customShadows: customShadows.dark,
      },
    },
    cssVariables: {
      cssVarPrefix: "",
      colorSchemeSelector: "data-color-scheme",
    },
    breakpoints,
    components,
    typography,
  };

  return createMuiTheme(themeOptions);
};
