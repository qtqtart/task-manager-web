import { Components, Theme } from "@mui/material";

import { varAlpha } from "../utils";

const MuiSkeleton: Components<Theme>["MuiSkeleton"] = {
  defaultProps: {
    animation: "wave",
    variant: "rounded",
  },
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: varAlpha(theme.vars.palette.grey["400Channel"], 0.12),
    }),
    rounded: ({ theme }) => ({
      borderRadius: 2 * theme.shape.borderRadius,
    }),
  },
};

export default { MuiSkeleton };
