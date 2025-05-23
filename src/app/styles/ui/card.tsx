import { Components, Theme } from "@mui/material";

const MuiCard: Components<Theme>["MuiCard"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      position: "relative",
      boxShadow: theme.vars.customShadows.card,
      borderRadius: 2 * theme.shape.borderRadius,
      zIndex: 0,
    }),
  },
};

const MuiCardHeader: Components<Theme>["MuiCardHeader"] = {
  defaultProps: {
    titleTypographyProps: {
      variant: "h6",
    },
  },
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(3, 3, 0),
    }),
  },
};

const MuiCardContent: Components<Theme>["MuiCardContent"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(3),
    }),
  },
};

export default { MuiCard, MuiCardHeader, MuiCardContent };
