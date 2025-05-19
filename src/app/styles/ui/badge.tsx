import { Components, Theme } from "@mui/material/styles";

const MuiBadge: Components<Theme>["MuiBadge"] = {
  styleOverrides: {
    dot: {
      borderRadius: "50%",
    },
  },
};

export const badge = { MuiBadge };
