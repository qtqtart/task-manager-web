import { Components, Theme } from "@mui/material";

import { varAlpha } from "../utils";

const MuiAvatar: Components<Theme>["MuiAvatar"] = {
  styleOverrides: {
    root: {
      variants: [
        {
          props: ({ ownerState }) => ownerState.color === "default",
          style: ({ theme }) => ({
            color: theme.vars.palette.text.secondary,
            backgroundColor: varAlpha(
              theme.vars.palette.grey["500Channel"],
              0.24,
            ),
          }),
        },
      ],
    },
    rounded: ({ theme }) => ({
      borderRadius: 1.5 * theme.shape.borderRadius,
    }),
  },
};

const MuiAvatarGroup: Components<Theme>["MuiAvatarGroup"] = {
  defaultProps: {
    max: 3,
  },
  styleOverrides: {
    root: {
      justifyContent: "flex-end",
    },
    avatar: ({ theme }) => ({
      fontSize: "16px",
      fontWeight: theme.typography.fontWeightSemiBold,
      "&:first-of-type": {
        fontSize: "12px",
        color: theme.vars.palette.primary.dark,
        backgroundColor: theme.vars.palette.primary.lighter,
      },
    }),
  },
};

export default { MuiAvatar, MuiAvatarGroup };
