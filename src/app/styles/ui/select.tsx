import { Components, Theme } from "@mui/material";

const sx = {
  right: "10px",
  width: "18px",
  height: "18px",
  top: "calc(50% - 9px)",
};

const MuiSelect: Components<Theme>["MuiSelect"] = {
  styleOverrides: {
    icon: {
      ...sx,
    },
  },
};

const MuiNativeSelect: Components<Theme>["MuiNativeSelect"] = {
  styleOverrides: {
    icon: {
      ...sx,
    },
  },
};

export default { MuiSelect, MuiNativeSelect };
