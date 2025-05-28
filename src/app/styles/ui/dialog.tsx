import { Components, Theme } from "@mui/material";

import { varAlpha } from "../utils";

const MuiDialog: Components<Theme>["MuiDialog"] = {
  defaultProps: {
    closeAfterTransition: false,
  },
  styleOverrides: {
    paper: ({ ownerState, theme }) => ({
      boxShadow: theme.vars.customShadows.dialog,
      borderRadius: 2 * theme.shape.borderRadius,

      borderColor: varAlpha(theme.vars.palette.grey["500Channel"], 0.32),
      borderWidth: "1px",
      borderStyle: "solid",

      ...(!ownerState.fullScreen && {
        margin: theme.spacing(2),
      }),
    }),
    paperFullScreen: {
      borderRadius: 0,
    },
  },
};

const MuiDialogTitle: Components<Theme>["MuiDialogTitle"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(3),
    }),
  },
};

const MuiDialogContent: Components<Theme>["MuiDialogContent"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(0, 3),
    }),
    dividers: ({ theme }) => ({
      borderBottomStyle: "dashed",
      borderTop: 0,
      paddingBottom: theme.spacing(3),
    }),
  },
};

const MuiDialogActions: Components<Theme>["MuiDialogActions"] = {
  defaultProps: {
    disableSpacing: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(3),
      "& > :not(:first-of-type)": {
        marginLeft: theme.spacing(1.5),
      },
    }),
  },
};

export default {
  MuiDialog,
  MuiDialogTitle,
  MuiDialogContent,
  MuiDialogActions,
};
