import { fabClasses } from "@mui/material/Fab";
import { Components, ComponentsVariants, Theme } from "@mui/material/styles";
import { varAlpha } from "minimal-shared/utils";

const COLORS = [
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
] as const;

const DEFAULT_COLORS = ["default", "inherit"];
const EXTENDED_VARIANT = ["extended", "outlinedExtended", "softExtended"];
const FILLED_VARIANT = ["circular", "extended"];
const OUTLINED_VARIANT = ["outlined", "outlinedExtended"];
const SOFT_VARIANT = ["soft", "softExtended"];

const filledVariant: Record<string, ComponentsVariants<Theme>["MuiFab"]> = {
  colors: COLORS.map((color) => ({
    props: ({ ownerState }) =>
      !ownerState.disabled &&
      FILLED_VARIANT.includes(ownerState.variant!) &&
      ownerState.color === color,
    style: ({ theme }) => ({
      boxShadow: theme.vars.customShadows[color],
      "&:hover": { boxShadow: "none" },
    }),
  })),
  base: [
    {
      props: ({ ownerState }) =>
        FILLED_VARIANT.includes(ownerState.variant!) &&
        DEFAULT_COLORS.includes(ownerState.color!),
      style: ({ theme }) => ({
        boxShadow: theme.vars.customShadows.z8,
        color: theme.vars.palette.grey[800],
        backgroundColor: theme.vars.palette.grey[300],
        "&:hover": {
          boxShadow: "none",
          backgroundColor: theme.vars.palette.grey[400],
        },
        [`&.${fabClasses.colorInherit}`]: {
          color: theme.vars.palette.common.white,
          backgroundColor: theme.vars.palette.text.primary,
          "&:hover": { backgroundColor: theme.vars.palette.grey[700] },
          ...theme.applyStyles("dark", {
            color: theme.vars.palette.grey[800],
            "&:hover": { backgroundColor: theme.vars.palette.grey[400] },
          }),
        },
      }),
    },
  ],
};

const outlinedVariant: Record<string, ComponentsVariants<Theme>["MuiFab"]> = {
  colors: COLORS.map((color) => ({
    props: ({ ownerState }) =>
      !ownerState.disabled &&
      OUTLINED_VARIANT.includes(ownerState.variant!) &&
      ownerState.color === color,
    style: ({ theme }) => ({
      color: theme.vars.palette[color].main,
      border: `solid 1px ${varAlpha(theme.vars.palette[color].mainChannel, 0.48)}`,
      "&:hover": {
        backgroundColor: varAlpha(theme.vars.palette[color].mainChannel, 0.08),
      },
    }),
  })),
  base: [
    {
      props: ({ ownerState }) => OUTLINED_VARIANT.includes(ownerState.variant!),
      style: ({ theme }) => ({
        boxShadow: "none",
        backgroundColor: "transparent",
        color: theme.vars.palette.text.secondary,
        border: `solid 1px ${varAlpha(theme.vars.palette.grey["500Channel"], 0.32)}`,
        "&:hover": {
          borderColor: "currentColor",
          boxShadow: "0 0 0 0.75px currentColor",
          backgroundColor: theme.vars.palette.action.hover,
        },
        [`&.${fabClasses.colorInherit}`]: {
          color: theme.vars.palette.text.primary,
        },
        [`&.${fabClasses.disabled}`]: {
          backgroundColor: "transparent",
          border: `1px solid ${theme.vars.palette.action.disabledBackground}`,
        },
      }),
    },
  ],
};

const softVariant: Record<string, ComponentsVariants<Theme>["MuiFab"]> = {
  colors: COLORS.map((color) => ({
    props: ({ ownerState }) =>
      !ownerState.disabled &&
      SOFT_VARIANT.includes(ownerState.variant!) &&
      ownerState.color === color,
    style: ({ theme }) => ({
      boxShadow: "none",
      color: theme.vars.palette[color].dark,
      backgroundColor: varAlpha(theme.vars.palette[color].mainChannel, 0.16),
      "&:hover": {
        boxShadow: "none",
        backgroundColor: varAlpha(theme.vars.palette[color].mainChannel, 0.32),
      },
      ...theme.applyStyles("dark", {
        color: theme.vars.palette[color].light,
      }),
    }),
  })),
  base: [
    {
      props: ({ ownerState }) =>
        SOFT_VARIANT.includes(ownerState.variant!) &&
        DEFAULT_COLORS.includes(ownerState.color!),
      style: ({ theme }) => ({
        boxShadow: "none",
        color: theme.vars.palette.grey[800],
        backgroundColor: theme.vars.palette.grey[300],
        "&:hover": {
          boxShadow: "none",
          backgroundColor: theme.vars.palette.grey[400],
        },
        [`&.${fabClasses.colorInherit}`]: {
          color: theme.vars.palette.text.primary,
          backgroundColor: varAlpha(
            theme.vars.palette.grey["500Channel"],
            0.08,
          ),
          "&:hover": {
            backgroundColor: varAlpha(
              theme.vars.palette.grey["500Channel"],
              0.24,
            ),
          },
        },
      }),
    },
  ],
};

const sizes: ComponentsVariants<Theme>["MuiFab"] = [
  {
    props: ({ ownerState }) => EXTENDED_VARIANT.includes(ownerState.variant!),
    style: ({ theme }) => ({
      height: 48,
      width: "auto",
      minHeight: 48,
      borderRadius: 48 / 2,
      gap: theme.spacing(1),
      padding: theme.spacing(0, 2),
      [`&.${fabClasses.sizeSmall}`]: {
        height: 34,
        minHeight: 34,
        borderRadius: 34 / 2,
        gap: theme.spacing(0.5),
        padding: theme.spacing(0, 1),
      },
      [`&.${fabClasses.sizeMedium}`]: {
        height: 40,
        minHeight: 40,
        borderRadius: 40 / 2,
      },
    }),
  },
];

const MuiFab: Components<Theme>["MuiFab"] = {
  defaultProps: { color: "primary" },
  styleOverrides: {
    root: {
      variants: [
        filledVariant.base,
        filledVariant.colors,
        outlinedVariant.base,
        outlinedVariant.colors,
        softVariant.base,
        softVariant.colors,
        sizes,
      ].flat(),
    },
  },
};

export const fab = { MuiFab };
