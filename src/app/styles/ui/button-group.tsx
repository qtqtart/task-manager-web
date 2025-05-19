import {
  buttonGroupClasses,
  ButtonGroupProps,
  Components,
  ComponentsVariants,
  CSSObject,
  Theme,
} from "@mui/material";
import { varAlpha } from "minimal-shared/utils";

const buttonClasses = `& .${buttonGroupClasses.firstButton}, & .${buttonGroupClasses.middleButton}`;

const COLORS = [
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
] as const;

const styleColors = (
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

const softVariant: Record<string, ComponentsVariants<Theme>["MuiButtonGroup"]> =
  {
    colors: COLORS.map((color) => ({
      props: ({ ownerState }) =>
        !ownerState.disabled &&
        ownerState.variant === "soft" &&
        ownerState.color === color,
      style: ({ theme }) => ({
        [buttonClasses]: {
          borderColor: varAlpha(theme.vars.palette[color].darkChannel, 0.24),
          ...theme.applyStyles("dark", {
            borderColor: varAlpha(theme.vars.palette[color].lightChannel, 0.24),
          }),
        },
        [`&.${buttonGroupClasses.vertical}`]: {
          [buttonClasses]: {
            borderColor: varAlpha(theme.vars.palette[color].darkChannel, 0.24),
            ...theme.applyStyles("dark", {
              borderColor: varAlpha(
                theme.vars.palette[color].lightChannel,
                0.24,
              ),
            }),
          },
        },
      }),
    })),
    base: [
      {
        props: ({ ownerState }) => ownerState.variant === "soft",
        style: ({ theme }) => ({
          [buttonClasses]: {
            borderRight: `solid 1px ${varAlpha(theme.vars.palette.grey["500Channel"], 0.32)}`,
            [`&.${buttonGroupClasses.disabled}`]: {
              borderColor: theme.vars.palette.action.disabledBackground,
            },
          },
          [`&.${buttonGroupClasses.vertical}`]: {
            [buttonClasses]: {
              borderRight: "none",
              borderBottom: `solid 1px ${varAlpha(theme.vars.palette.grey["500Channel"], 0.32)}`,
              [`&.${buttonGroupClasses.disabled}`]: {
                borderColor: theme.vars.palette.action.disabledBackground,
              },
            },
          },
        }),
      },
    ],
  };

const MuiButtonGroup: Components<Theme>["MuiButtonGroup"] = {
  defaultProps: { disableElevation: true },
  styleOverrides: {
    root: {
      variants: [softVariant.base, softVariant.colors].flat(),
    },
    contained: ({ theme, ownerState }) => {
      const styled = {
        colors: styleColors(ownerState, (color) => ({
          [buttonClasses]: {
            borderColor: varAlpha(theme.vars.palette[color].darkChannel, 0.48),
          },
        })),
        inheritColor: {
          ...(ownerState.color === "inherit" && {
            [buttonClasses]: {
              borderColor: varAlpha(
                theme.vars.palette.grey["500Channel"],
                0.32,
              ),
            },
          }),
        },
        disabled: {
          ...(ownerState.disabled && {
            [buttonClasses]: {
              [`&.${buttonGroupClasses.disabled}`]: {
                borderColor: theme.vars.palette.action.disabledBackground,
              },
            },
          }),
        },
      };
      return { ...styled.inheritColor, ...styled.colors, ...styled.disabled };
    },

    outlined: ({ theme, ownerState }) => {
      const styled = {
        inheritColor: {
          ...(ownerState.color === "inherit" && {
            [`& .${buttonGroupClasses.grouped}`]: {
              "&:hover": { borderColor: theme.vars.palette.text.primary },
            },
          }),
        },
      };
      return { ...styled.inheritColor };
    },
    text: ({ theme, ownerState }) => {
      const styled = {
        colors: styleColors(ownerState, (color) => ({
          [buttonClasses]: {
            borderColor: varAlpha(theme.vars.palette[color].mainChannel, 0.48),
          },
        })),
        inheritColor: {
          ...(ownerState.color === "inherit" && {
            [buttonClasses]: {
              borderColor: varAlpha(
                theme.vars.palette.grey["500Channel"],
                0.32,
              ),
            },
          }),
        },
        disabled: {
          ...(ownerState.disabled && {
            [buttonClasses]: {
              [`&.${buttonGroupClasses.disabled}`]: {
                borderColor: theme.vars.palette.action.disabledBackground,
              },
            },
          }),
        },
      };
      return { ...styled.inheritColor, ...styled.colors, ...styled.disabled };
    },
  },
};

export const buttonGroup = { MuiButtonGroup };
