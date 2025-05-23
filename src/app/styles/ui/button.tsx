import { ButtonProps, Components, CSSObject, Theme } from "@mui/material";

import { varAlpha } from "../utils";

const COLORS = [
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
] as const;

const overrideColors = (
  ownerState: ButtonProps,
  styles: (val: (typeof COLORS)[number]) => CSSObject,
) => {
  const outputStyle = COLORS.reduce((acc, color) => {
    if (!ownerState.disabled && ownerState.color === color) {
      acc = styles(color);
    }
    return acc;
  }, {});
  return outputStyle;
};

const MuiButtonBase: Components<Theme>["MuiButtonBase"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontFamily: theme.typography.fontFamily,
    }),
  },
};

const MuiButton: Components<Theme>["MuiButton"] = {
  defaultProps: {
    color: "inherit",
    disableElevation: true,
  },
  styleOverrides: {
    root: {},
    contained: ({ theme, ownerState }) => ({
      ...overrideColors(ownerState, (color) => ({
        "&:hover": { boxShadow: theme.vars.customShadows[color] },
      })),
      ...(ownerState.color === "inherit" &&
        !ownerState.disabled && {
          color: theme.vars.palette.common.white,
          backgroundColor: theme.vars.palette.grey[800],
          "&:hover": {
            boxShadow: theme.vars.customShadows.z8,
            backgroundColor: theme.vars.palette.grey[700],
          },
          ...theme.applyStyles("dark", {
            color: theme.vars.palette.grey[800],
            backgroundColor: theme.vars.palette.common.white,
            "&:hover": { backgroundColor: theme.vars.palette.grey[400] },
          }),
        }),
    }),
    outlined: ({ theme, ownerState }) => ({
      colors: overrideColors(ownerState, (color) => ({
        borderColor: varAlpha(theme.vars.palette[color].mainChannel, 0.48),
      })),
      ...(ownerState.color === "inherit" &&
        !ownerState.disabled && {
          borderColor: varAlpha(theme.vars.palette.grey["500Channel"], 0.32),
          "&:hover": {
            backgroundColor: theme.vars.palette.action.hover,
          },
        }),
      "&:hover": {
        borderColor: "currentColor",
        boxShadow: "0 0 0 0.75px currentColor",
      },
    }),
    text: ({ ownerState, theme }) => ({
      ...(ownerState.color === "inherit" &&
        !ownerState.disabled && {
          "&:hover": {
            backgroundColor: theme.vars.palette.action.hover,
          },
        }),
    }),
    sizeSmall: ({ theme, ownerState }) => ({
      height: "30px",
      paddingLeft: theme.spacing(ownerState.variant === "text" ? 1 / 2 : 1),
      paddingRight: theme.spacing(ownerState.variant === "text" ? 1 / 2 : 1),
    }),
    sizeMedium: ({ theme, ownerState }) => ({
      paddingLeft: theme.spacing(ownerState.variant === "text" ? 1 : 1.5),
      paddingRight: theme.spacing(ownerState.variant === "text" ? 1 : 1.5),
    }),
    sizeLarge: ({ theme, ownerState }) => ({
      height: "48px",
      paddingLeft: theme.spacing(ownerState.variant === "text" ? 1.25 : 1.75),
      paddingRight: theme.spacing(ownerState.variant === "text" ? 1.25 : 1.75),
    }),
  },
};

export default { MuiButtonBase, MuiButton };
