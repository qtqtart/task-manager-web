import { Components, radioClasses, Theme } from "@mui/material";

const MuiRadio: Components<Theme>["MuiRadio"] = {
  defaultProps: {
    size: "small",
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      padding: theme.spacing(1),
      ...(ownerState.color === "default" && {
        [`&.${radioClasses.checked}`]: {
          color: theme.vars.palette.text.primary,
        },
      }),
      [`&.${radioClasses.disabled}`]: {
        color: theme.vars.palette.action.disabled,
      },
    }),
  },
};

export const radio = { MuiRadio };
