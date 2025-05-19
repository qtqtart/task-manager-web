import { Components, listClasses, Theme } from "@mui/material";

const MuiPopover: Components<Theme>["MuiPopover"] = {
  styleOverrides: {
    paper: {
      [`& .${listClasses.root}`]: {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
  },
};

export const popover = { MuiPopover };
