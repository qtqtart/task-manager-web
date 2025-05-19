import { Components, Theme } from "@mui/material";
import { varAlpha } from "minimal-shared/utils";

const MuiDrawer: Components<Theme>["MuiDrawer"] = {
  styleOverrides: {
    paperAnchorRight: ({ ownerState, theme }) => ({
      ...(ownerState.variant === "temporary" && {
        boxShadow: `-40px 40px 80px -8px ${varAlpha(theme.vars.palette.grey["500Channel"], 0.24)}`,
        ...theme.applyStyles("dark", {
          boxShadow: `-40px 40px 80px -8px ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
        }),
      }),
    }),
    paperAnchorLeft: ({ ownerState, theme }) => ({
      ...(ownerState.variant === "temporary" && {
        boxShadow: `40px 40px 80px -8px ${varAlpha(theme.vars.palette.grey["500Channel"], 0.24)}`,
        ...theme.applyStyles("dark", {
          boxShadow: `40px 40px 80px -8px  ${varAlpha(theme.vars.palette.common.blackChannel, 0.24)}`,
        }),
      }),
    }),
  },
};

export const drawer = { MuiDrawer };
