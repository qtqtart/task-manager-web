import { Components, Theme } from "@mui/material";

const MuiSelect: Components<Theme>["MuiSelect"] = {
  styleOverrides: {
    icon: {
      right: 10,
      width: 18,
      height: 18,
      top: "calc(50% - 9px)",
    },
  },
};

const MuiNativeSelect: Components<Theme>["MuiNativeSelect"] = {
  styleOverrides: {
    icon: {
      right: 10,
      width: 18,
      height: 18,
      top: "calc(50% - 9px)",
    },
  },
};

export const select = { MuiSelect, MuiNativeSelect };
