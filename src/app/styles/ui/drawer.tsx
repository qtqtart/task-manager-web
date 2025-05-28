import { Components, Theme } from "@mui/material";

import { varAlpha } from "../utils";

const MuiDrawer: Components<Theme>["MuiDrawer"] = {
  styleOverrides: {
    paperAnchorRight: ({ ownerState, theme }) => ({
      ...(ownerState.variant === "temporary" && {
        boxShadow: `-${theme.customShadows.drawer}`,
        ...theme.applyStyles("dark", {
          boxShadow: `-${theme.customShadows.drawer}`,
        }),
      }),
    }),
    paperAnchorLeft: ({ ownerState, theme }) => ({
      ...(ownerState.variant === "temporary" && {
        boxShadow: `${theme.customShadows.drawer}`,
        ...theme.applyStyles("dark", {
          boxShadow: `${theme.customShadows.drawer}`,
        }),
      }),
    }),
    paper: ({ theme }) => ({
      borderColor: varAlpha(theme.vars.palette.grey["500Channel"], 0.32),
      borderWidth: "1px",
      borderStyle: "solid",
    }),
  },
};

export default { MuiDrawer };
