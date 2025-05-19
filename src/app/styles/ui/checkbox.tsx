import { checkboxClasses, Components, Theme } from "@mui/material/";

const MuiCheckbox: Components<Theme>["MuiCheckbox"] = {
  defaultProps: {
    size: "small",
  },

  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      padding: theme.spacing(1),
      ...(ownerState.color === "default" && {
        [`&.${checkboxClasses.checked}`]: {
          color: theme.vars.palette.text.primary,
        },
      }),
      [`&.${checkboxClasses.disabled}`]: {
        color: theme.vars.palette.action.disabled,
      },
    }),
  },
};

export const checkbox = { MuiCheckbox };
