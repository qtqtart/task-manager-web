import { PaletteMode, PaletteOptions } from "@mui/material";
import { grey, yellow } from "@mui/material/colors";

export const palette = (themeMode: PaletteMode) => {
  const light: PaletteOptions = {
    mode: "light",
    primary: {
      main: grey[900],
    },
    secondary: yellow,
    background: {
      default: grey[50],
      paper: grey[100],
    },
    text: {
      primary: grey[900],
      secondary: grey[700],
    },
  };

  const dark: PaletteOptions = {
    mode: "dark",
    primary: {
      main: grey[50],
    },
    secondary: yellow,
    background: {
      default: grey[900],
      paper: grey[800],
    },
    text: {
      primary: grey[50],
      secondary: grey[300],
    },
  };

  if (themeMode === "light") return light;
  if (themeMode === "dark") return dark;
  return undefined;
};
