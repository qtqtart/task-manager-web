import { Components, Theme } from "@mui/material";
import { varAlpha } from "minimal-shared/utils";

const MuiPaper: Components<Theme>["MuiPaper"] = {
  defaultProps: { elevation: 0 },
  styleOverrides: {
    root: { backgroundImage: "none" },
    outlined: ({ theme }) => ({
      borderColor: varAlpha(theme.vars.palette.grey["500Channel"], 0.16),
    }),
  },
};

export const paper = { MuiPaper };
