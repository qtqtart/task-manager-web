import { fabClasses } from "@mui/material/Fab";
import { Components, Theme } from "@mui/material/styles";

const COLORS = [
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
] as const;

const MuiFab: Components<Theme>["MuiFab"] = {
  defaultProps: {
    color: "primary",
  },
  styleOverrides: {
    root: ({ theme }) => ({
      height: 48,
      width: "auto",
      minHeight: "48px",
      borderRadius: 3 * theme.shape.borderRadius,
      gap: theme.spacing(1),
      padding: theme.spacing(0, 2),
      color: theme.vars.palette.grey[800],
      backgroundColor: theme.vars.palette.grey[300],
      boxShadow: theme.vars.customShadows.z8,
      "&:hover": {
        boxShadow: "none",
        backgroundColor: theme.vars.palette.grey[400],
      },
      ...COLORS.map((color) => ({
        boxShadow: theme.vars.customShadows[color],
        "&:hover": {
          boxShadow: "none",
        },
      })),
      [`&.${fabClasses.colorInherit}`]: {
        color: theme.vars.palette.common.white,
        backgroundColor: theme.vars.palette.text.primary,
        "&:hover": { backgroundColor: theme.vars.palette.grey[700] },
        ...theme.applyStyles("dark", {
          color: theme.vars.palette.grey[800],
          "&:hover": {
            backgroundColor: theme.vars.palette.grey[400],
          },
        }),
      },
      [`&.${fabClasses.sizeSmall}`]: {
        height: 34,
        minHeight: 34,
        borderRadius: 2 * theme.shape.borderRadius,
        gap: theme.spacing(0.5),
        padding: theme.spacing(0, 1),
      },
      [`&.${fabClasses.sizeMedium}`]: {
        height: 40,
        minHeight: 40,
        borderRadius: 2.5 * theme.shape.borderRadius,
      },
    }),
  },
};

export default { MuiFab };
