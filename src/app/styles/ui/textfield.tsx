import {
  Components,
  filledInputClasses,
  inputBaseClasses,
  outlinedInputClasses,
  Theme,
} from "@mui/material";

import { varAlpha } from "../utils";

const MuiInputBase: Components<Theme>["MuiInputBase"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      [`&.${inputBaseClasses.disabled}`]: {
        "& svg": {
          color: theme.vars.palette.text.disabled,
        },
      },
      [`& .${inputBaseClasses.input}:focus`]: {
        borderRadius: "inherit",
      },
    }),
    input: ({ theme }) => ({
      fontSize: theme.typography.pxToRem(14),
      "&::placeholder": {
        opacity: 1,
        color: theme.vars.palette.text.disabled,
      },
    }),
  },
};

const MuiInput: Components<Theme>["MuiInput"] = {
  styleOverrides: {
    underline: ({ theme }) => ({
      "&::before": {
        borderBottomColor: varAlpha(
          theme.vars.palette.grey["500Channel"],
          0.32,
        ),
      },
      "&::after": {
        borderBottomColor: theme.vars.palette.text.primary,
      },
    }),
  },
};

const MuiOutlinedInput: Components<Theme>["MuiOutlinedInput"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      [`&.${outlinedInputClasses.focused}`]: {
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: theme.vars.palette.text.primary,
        },
      },
      [`&.${outlinedInputClasses.error}`]: {
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: theme.vars.palette.error.main,
        },
      },
      [`&.${outlinedInputClasses.disabled}`]: {
        [`& .${outlinedInputClasses.notchedOutline}`]: {
          borderColor: theme.vars.palette.action.disabledBackground,
        },
      },
    }),
    notchedOutline: ({ theme }) => ({
      borderColor: varAlpha(theme.vars.palette.grey["500Channel"], 0.24),
      transition: theme.transitions.create(["border-color"], {
        duration: theme.transitions.duration.shortest,
      }),
    }),
  },
};

const MuiFilledInput: Components<Theme>["MuiFilledInput"] = {
  defaultProps: { disableUnderline: true },
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: theme.shape.borderRadius,
      backgroundColor: varAlpha(theme.vars.palette.grey["500Channel"], 0.08),
      "&:hover": {
        backgroundColor: varAlpha(theme.vars.palette.grey["500Channel"], 0.16),
      },
      [`&.${filledInputClasses.focused}`]: {
        backgroundColor: varAlpha(theme.vars.palette.grey["500Channel"], 0.16),
      },
      [`&.${filledInputClasses.error}`]: {
        backgroundColor: varAlpha(theme.vars.palette.error.mainChannel, 0.08),
        [`&.${filledInputClasses.focused}`]: {
          backgroundColor: varAlpha(theme.vars.palette.error.mainChannel, 0.16),
        },
      },
      [`&.${filledInputClasses.disabled}`]: {
        backgroundColor: theme.vars.palette.action.disabledBackground,
      },
    }),
  },
};

const MuiTextField: Components<Theme>["MuiTextField"] = {
  defaultProps: {
    variant: "outlined",
  },
  styleOverrides: {},
};

export default {
  MuiInput,
  MuiInputBase,
  MuiFilledInput,
  MuiOutlinedInput,
  MuiTextField,
};
