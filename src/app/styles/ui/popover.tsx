import { Components, listClasses, Theme } from "@mui/material";

import { varAlpha } from "../utils";

const MuiPopover: Components<Theme>["MuiPopover"] = {
  styleOverrides: {
    paper: ({ theme }) => ({
      borderColor: varAlpha(theme.vars.palette.grey["500Channel"], 0.32),
      borderWidth: "1px",
      borderStyle: "solid",
      padding: theme.spacing(1),

      [`& .${listClasses.root}`]: {
        padding: theme.spacing(2),
      },
    }),
  },
};

export default { MuiPopover };
