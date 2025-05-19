import { avatarGroupClasses, Components, Theme } from "@mui/material";
import { varAlpha } from "minimal-shared/utils";

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
    rounded: ({ theme }) => ({ borderRadius: theme.shape.borderRadius * 1.5 }),
  },
};

const MuiAvatarGroup: Components<Theme>["MuiAvatarGroup"] = {
  defaultProps: { max: 3 },
  styleOverrides: {
    root: ({ ownerState }) => ({
      justifyContent: "flex-end",
      ...(ownerState.variant === "compact" && {
        width: 40,
        height: 40,
        position: "relative",
        [`& .${avatarGroupClasses.avatar}`]: {
          margin: 0,
          width: 28,
          height: 28,
          position: "absolute",
          "&:first-of-type": { left: 0, bottom: 0, zIndex: 9 },
          "&:last-of-type": { top: 0, right: 0 },
        },
      }),
    }),
    avatar: ({ theme }) => ({
      fontSize: 16,
      fontWeight: theme.typography.fontWeightSemiBold,
      "&:first-of-type": {
        fontSize: 12,
        color: theme.vars.palette.primary.dark,
        backgroundColor: theme.vars.palette.primary.lighter,
      },
    }),
  },
};

export const avatar = { MuiAvatar, MuiAvatarGroup };
