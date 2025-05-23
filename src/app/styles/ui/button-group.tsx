import {
  buttonGroupClasses,
  ButtonGroupProps,
  Components,
  CSSObject,
  Theme,
} from "@mui/material";

import { varAlpha } from "../utils";

const buttonClasses = `& .${buttonGroupClasses.firstButton}, & .${buttonGroupClasses.middleButton}`;

const COLORS = [
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
] as const;

const overrideColors = (
  ownerState: ButtonGroupProps,
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

const MuiButtonGroup: Components<Theme>["MuiButtonGroup"] = {
  defaultProps: { disableElevation: true },
  styleOverrides: {
    root: {},
    contained: ({ theme, ownerState }) => ({
      ...overrideColors(ownerState, (color) => ({
        [buttonClasses]: {
          borderColor: varAlpha(theme.vars.palette[color].darkChannel, 0.48),
        },
      })),
      ...(ownerState.color === "inherit" && {
        [buttonClasses]: {
          borderColor: varAlpha(theme.vars.palette.grey["500Channel"], 0.32),
        },
      }),
      ...(ownerState.disabled && {
        [buttonClasses]: {
          [`&.${buttonGroupClasses.disabled}`]: {
            borderColor: theme.vars.palette.action.disabledBackground,
          },
        },
      }),
    }),
    outlined: ({ theme, ownerState }) => ({
      ...(ownerState.color === "inherit" && {
        [`& .${buttonGroupClasses.grouped}`]: {
          "&:hover": { borderColor: theme.vars.palette.text.primary },
        },
      }),
    }),
    text: ({ theme, ownerState }) => ({
      ...overrideColors(ownerState, (color) => ({
        [buttonClasses]: {
          borderColor: varAlpha(theme.vars.palette[color].mainChannel, 0.48),
        },
      })),
      ...(ownerState.color === "inherit" && {
        [buttonClasses]: {
          borderColor: varAlpha(theme.vars.palette.grey["500Channel"], 0.32),
        },
      }),
      ...(ownerState.disabled && {
        [buttonClasses]: {
          [`&.${buttonGroupClasses.disabled}`]: {
            borderColor: theme.vars.palette.action.disabledBackground,
          },
        },
      }),
    }),
  },
};

export default { MuiButtonGroup };
