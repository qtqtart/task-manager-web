import { Components, Theme } from "@mui/material";

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
  },
};

export default { MuiDrawer };
