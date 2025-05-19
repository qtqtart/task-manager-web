import {
  buttonClasses,
  Components,
  dialogActionsClasses,
  Theme,
} from "@mui/material";

const MuiPickersLayout: Components<Theme>["MuiPickersLayout"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      [`& .${dialogActionsClasses.root}`]: {
        [`& .${buttonClasses.root}`]: {
          [`&:last-of-type`]: {
            color: theme.vars.palette.common.white,
            backgroundColor: theme.vars.palette.text.primary,
            ...theme.applyStyles("dark", {
              color: theme.vars.palette.grey[800],
            }),
          },
        },
      },
    }),
  },
};

export const datePicker = {
  MuiPickersLayout,
};
