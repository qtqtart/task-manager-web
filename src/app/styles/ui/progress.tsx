import { Components, Theme } from "@mui/material";

import { varAlpha } from "../utils";

const MuiLinearProgress: Components<Theme>["MuiLinearProgress"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: varAlpha(theme.vars.palette.text.primaryChannel, 0.24),
    }),
    bar: {
      borderRadius: "inherit",
    },
  },
};

export default { MuiLinearProgress };
