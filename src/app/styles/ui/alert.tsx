import {
  alertClasses,
  AlertProps,
  Components,
  CSSObject,
  Theme,
} from "@mui/material";

import { varAlpha } from "../utils";

const COLORS = ["info", "success", "warning", "error"] as const;

const overrideColors = (
  ownerState: AlertProps,
  styles: (val: (typeof COLORS)[number]) => CSSObject,
) => {
  const outputStyle = COLORS.reduce((acc, color) => {
    if (ownerState.severity === color) {
      acc = styles(color);
    }
    return acc;
  }, {});
  return outputStyle;
};

const MuiAlert: Components<Theme>["MuiAlert"] = {
  styleOverrides: {
    icon: { opacity: 1 },
    standard: ({ ownerState, theme }) => {
      const styled = {
        colors: overrideColors(ownerState, (color) => ({
          color: theme.vars.palette[color].darker,
          backgroundColor: theme.vars.palette[color].lighter,
          ...theme.applyStyles("dark", {
            color: theme.vars.palette[color].lighter,
            backgroundColor: theme.vars.palette[color].darker,
          }),
          [`& .${alertClasses.icon}`]: {
            color: theme.vars.palette[color].main,
            ...theme.applyStyles("dark", {
              color: theme.vars.palette[color].light,
            }),
          },
        })),
      };
      return { ...styled.colors };
    },
    filled: ({ ownerState, theme }) => {
      const styled = {
        colors: overrideColors(ownerState, (color) => ({
          color: theme.vars.palette[color].contrastText,
        })),
      };
      return { ...styled.colors };
    },
    outlined: ({ ownerState, theme }) => {
      const styled = {
        colors: overrideColors(ownerState, (color) => ({
          backgroundColor: varAlpha(
            theme.vars.palette[color].mainChannel,
            0.08,
          ),
          color: theme.vars.palette[color].dark,
          border: `solid 1px ${varAlpha(theme.vars.palette[color].mainChannel, 0.16)}`,
          ...theme.applyStyles("dark", {
            color: theme.vars.palette[color].light,
          }),
          [`& .${alertClasses.icon}`]: {
            color: theme.vars.palette[color].main,
          },
        })),
      };
      return { ...styled.colors };
    },
  },
};

const MuiAlertTitle: Components<Theme>["MuiAlertTitle"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      width: "100%",
      marginBottom: theme.spacing(0.5),
      fontWeight: theme.typography.fontWeightSemiBold,
    }),
  },
};

export default { MuiAlert, MuiAlertTitle };
