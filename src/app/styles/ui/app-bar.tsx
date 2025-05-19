import { Components, Theme } from "@mui/material";

const MuiAppBar: Components<Theme>["MuiAppBar"] = {
  defaultProps: { color: "transparent" },
  styleOverrides: { root: { boxShadow: "none" } },
};

export const appBar = { MuiAppBar };
