import {
  Components,
  CSSObject,
  Theme,
  toggleButtonClasses,
  ToggleButtonProps,
} from "@mui/material";

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
  ownerState: ToggleButtonProps,
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

const MuiToggleButton: Components<Theme>["MuiToggleButton"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      ...overrideColors(ownerState, (color) => ({
        "&:hover": {
          borderColor: varAlpha(theme.vars.palette[color].mainChannel, 0.48),
          backgroundColor: varAlpha(
            theme.vars.palette[color].mainChannel,
            theme.vars.palette.action.hoverOpacity,
          ),
        },
      })),
      ...(ownerState.disabled && {
        [`&.${toggleButtonClasses.selected}`]: {
          color: theme.vars.palette.action.disabled,
          backgroundColor: theme.vars.palette.action.selected,
          borderColor: theme.vars.palette.action.disabledBackground,
        },
      }),
      [`&.${toggleButtonClasses.selected}`]: {
        borderColor: "currentColor",
        boxShadow: "0 0 0 0.75px currentColor",
      },
    }),
  },
};

const MuiToggleButtonGroup: Components<Theme>["MuiToggleButtonGroup"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      gap: theme.spacing(1 / 2),
      padding: theme.spacing(1 / 2),
      border: `solid 1px ${varAlpha(theme.vars.palette.grey["500Channel"], 0.08)}`,
    }),
    grouped: {
      [`&.${toggleButtonClasses.root}`]: {
        border: "none",
        borderRadius: "inherit",
      },
      [`&.${toggleButtonClasses.selected}`]: {
        boxShadow: "none",
      },
    },
  },
};

export default { MuiToggleButton, MuiToggleButtonGroup };
