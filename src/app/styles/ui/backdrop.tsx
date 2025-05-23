import { Components, Theme } from "@mui/material";

import { varAlpha } from "../utils";

const MuiBackdrop: Components<Theme>["MuiBackdrop"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: varAlpha(theme.vars.palette.grey["800Channel"], 0.48),
    }),
    invisible: {
      background: "transparent",
    },
  },
};

export default { MuiBackdrop };
