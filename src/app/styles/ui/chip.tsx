import {
  chipClasses,
  ChipProps,
  Components,
  ComponentsVariants,
  CSSObject,
  Theme,
} from "@mui/material";
import { varAlpha } from "minimal-shared/utils";

const COLORS = [
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
] as const;

const styleColors = (
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

const softVariant: Record<string, ComponentsVariants<Theme>["MuiChip"]> = {
  colors: COLORS.map((color) => ({
    props: ({ ownerState }) =>
      !ownerState.disabled &&
      ownerState.variant === "soft" &&
      ownerState.color === color,
    style: ({ theme }) => ({
      color: theme.vars.palette[color].dark,
      backgroundColor: varAlpha(theme.vars.palette[color].mainChannel, 0.16),
      "&:hover": {
        backgroundColor: varAlpha(theme.vars.palette[color].mainChannel, 0.32),
      },
      ...theme.applyStyles("dark", {
        color: theme.vars.palette[color].light,
      }),
    }),
  })),
  inheritColor: [
    {
      props: ({ ownerState }) =>
        ownerState.variant === "soft" && ownerState.color === "default",
      style: ({ theme }) => ({
        backgroundColor: varAlpha(theme.vars.palette.grey["500Channel"], 0.16),
        "&:hover": {
          backgroundColor: varAlpha(
            theme.vars.palette.grey["500Channel"],
            0.32,
          ),
        },
      }),
    },
  ],
};

const MuiChip: Components<Theme>["MuiChip"] = {
  styleOverrides: {
    root: ({ ownerState, theme }) => {
      const styled = {
        colors: styleColors(ownerState, (color) => ({
          [`& .${chipClasses.avatar}`]: {
            color: theme.vars.palette[color].lighter,
            backgroundColor: theme.vars.palette[color].dark,
          },
        })),
        disabled: {
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
            ...(["filled", "soft"].includes(ownerState.variant!) && {
              color: theme.vars.palette.action.disabled,
              backgroundColor: theme.vars.palette.action.disabledBackground,
            }),
          },
        },
      };
      return {
        variants: [softVariant.inheritColor, softVariant.colors].flat(),
        ...styled.colors,
        ...styled.disabled,
      };
    },
    label: ({ theme }) => ({ fontWeight: theme.typography.fontWeightMedium }),
    icon: { color: "currentColor" },
    deleteIcon: {
      opacity: 0.48,
      color: "currentColor",
      "&:hover": { opacity: 1, color: "currentColor" },
    },
    sizeMedium: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius * 1.25,
    }),
    sizeSmall: ({ theme }) => ({ borderRadius: theme.shape.borderRadius }),
    filled: ({ ownerState, theme }) => {
      const styled = {
        defaultColor: {
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
        },
      };
      return { ...styled.defaultColor };
    },
    outlined: ({ ownerState, theme }) => {
      const styled = {
        defaultColor: {
          ...(!ownerState.disabled &&
            ownerState.color === "default" && {
              borderColor: varAlpha(
                theme.vars.palette.grey["500Channel"],
                0.32,
              ),
            }),
        },
      };
      return { ...styled.defaultColor };
    },
  },
};

export const chip = { MuiChip };
