import {
  chipClasses,
  ChipProps,
  Components,
  CSSObject,
  Theme,
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
  ownerState: ChipProps,
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

const MuiChip: Components<Theme>["MuiChip"] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      ...overrideColors(ownerState, (color) => ({
        [`& .${chipClasses.avatar}`]: {
          color: theme.vars.palette[color].lighter,
          backgroundColor: theme.vars.palette[color].dark,
        },
      })),
      [`&.${chipClasses.disabled}`]: {
        opacity: 1,
        [`& .${chipClasses.avatar}`]: {
          color: theme.vars.palette.action.disabled,
          backgroundColor: theme.vars.palette.action.disabledBackground,
        },
        ...(ownerState.variant === "outlined" && {
          color: theme.vars.palette.action.disabled,
          borderColor: theme.vars.palette.action.disabledBackground,
        }),
        ...(ownerState.variant === "filled" && {
          color: theme.vars.palette.action.disabled,
          backgroundColor: theme.vars.palette.action.disabledBackground,
        }),
      },
    }),
    label: ({ theme }) => ({
      fontWeight: theme.typography.fontWeightMedium,
    }),
    icon: {
      color: "currentColor",
    },
    deleteIcon: {
      opacity: 0.48,
      color: "currentColor",
      "&:hover": {
        opacity: 1,
        color: "currentColor",
      },
    },
    sizeMedium: ({ theme }) => ({
      borderRadius: 1.25 * theme.shape.borderRadius,
    }),
    sizeSmall: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius,
    }),
    filled: ({ ownerState, theme }) => ({
      ...(!ownerState.disabled &&
        ownerState.color === "default" && {
          color: theme.vars.palette.common.white,
          backgroundColor: theme.vars.palette.text.primary,
          [`& .${chipClasses.avatar}`]: {
            color: theme.vars.palette.text.primary,
          },
          "&:hover": { backgroundColor: theme.vars.palette.grey[700] },
          ...theme.applyStyles("dark", {
            color: theme.vars.palette.grey[800],
            "&:hover": { backgroundColor: theme.vars.palette.grey[100] },
          }),
        }),
    }),
    outlined: ({ ownerState, theme }) => ({
      ...(!ownerState.disabled &&
        ownerState.color === "default" && {
          borderColor: varAlpha(theme.vars.palette.grey["500Channel"], 0.32),
        }),
    }),
  },
};

export default { MuiChip };
