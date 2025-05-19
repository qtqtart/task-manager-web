import { Components, Theme } from "@mui/material";
import { varAlpha } from "minimal-shared/utils";

const MuiSkeleton: Components<Theme>["MuiSkeleton"] = {
  defaultProps: { animation: "wave", variant: "rounded" },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: varAlpha(theme.vars.palette.grey["400Channel"], 0.12),
    }),
    rounded: ({ theme }) => ({ borderRadius: theme.shape.borderRadius * 2 }),
  },
};

export const skeleton = { MuiSkeleton };
