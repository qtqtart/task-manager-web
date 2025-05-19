import { ColorSystemOptions, SupportedColorScheme } from "@mui/material";
import { createPaletteChannel, varAlpha } from "minimal-shared/utils";

export const primary = createPaletteChannel({
  lighter: "#C8FAD6",
  light: "#5BE49B",
  main: "#00A76F",
  dark: "#007867",
  darker: "#004B50",
  contrastText: "#FFFFFF",
});
export const secondary = createPaletteChannel({
  lighter: "#EFD6FF",
  light: "#C684FF",
  main: "#8E33FF",
  dark: "#5119B7",
  darker: "#27097A",
  contrastText: "#FFFFFF",
});
export const error = createPaletteChannel({
  lighter: "#FFE9D5",
  light: "#FFAC82",
  main: "#FF5630",
  dark: "#B71D18",
  darker: "#7A0916",
  contrastText: "#FFFFFF",
});
export const info = createPaletteChannel({
  lighter: "#CAFDF5",
  light: "#61F3F3",
  main: "#00B8D9",
  dark: "#006C9C",
  darker: "#003768",
  contrastText: "#FFFFFF",
});
export const success = createPaletteChannel({
  lighter: "#D3FCD2",
  light: "#77ED8B",
  main: "#22C55E",
  dark: "#118D57",
  darker: "#065E49",
  contrastText: "#ffffff",
});
export const warning = createPaletteChannel({
  lighter: "#FFF5CC",
  light: "#FFD666",
  main: "#FFAB00",
  dark: "#B76E00",
  darker: "#7A4100",
  contrastText: "#1C252E",
});
export const grey = createPaletteChannel({
  "50": "#FCFDFD",
  "100": "#F9FAFB",
  "200": "#F4F6F8",
  "300": "#DFE3E8",
  "400": "#C4CDD5",
  "500": "#919EAB",
  "600": "#637381",
  "700": "#454F5B",
  "800": "#1C252E",
  "900": "#141A21",
});
export const background = {
  light: createPaletteChannel({
    paper: "#FFFFFF",
    default: "#FFFFFF",
    neutral: grey[200],
  }),
  dark: createPaletteChannel({
    paper: grey[800],
    default: grey[900],
    neutral: "#28323D",
  }),
};
export const common = createPaletteChannel({
  black: "#000000",
  white: "#FFFFFF",
});
//
export const text = {
  light: createPaletteChannel({
    primary: grey[800],
    secondary: grey[600],
    disabled: grey[500],
  }),
  dark: createPaletteChannel({
    primary: "#FFFFFF",
    secondary: grey[500],
    disabled: grey[600],
  }),
};
//
export const baseAction = {
  hover: varAlpha(grey["500Channel"], 0.08),
  selected: varAlpha(grey["500Channel"], 0.16),
  focus: varAlpha(grey["500Channel"], 0.24),
  disabled: varAlpha(grey["500Channel"], 0.8),
  disabledBackground: varAlpha(grey["500Channel"], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};
export const action = {
  light: { ...baseAction, active: grey[600] },
  dark: { ...baseAction, active: grey[500] },
};
//
export const basePalette = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  common,
  grey,
  divider: varAlpha(grey["500Channel"], 0.2),
};
export const palette: Record<
  SupportedColorScheme,
  ColorSystemOptions["palette"]
> = {
  light: {
    ...basePalette,
    text: text.light,
    background: background.light,
    action: action.light,
  },
  dark: {
    ...basePalette,
    text: text.dark,
    background: background.dark,
    action: action.dark,
  },
};
