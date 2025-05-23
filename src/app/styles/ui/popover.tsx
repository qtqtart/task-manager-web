import { Components, listClasses, Theme } from "@mui/material";

const MuiPopover: Components<Theme>["MuiPopover"] = {
  styleOverrides: {
    paper: ({ theme }) => ({
      [`& .${listClasses.root}`]: {
        padding: theme.spacing(2),
      },
    }),
  },
};

export default { MuiPopover };
