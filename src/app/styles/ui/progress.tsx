import {
  Components,
  CSSObject,
  LinearProgressProps,
  Theme,
} from "@mui/material";
import { varAlpha } from "minimal-shared/utils";

const COLORS = [
  "primary",
  "secondary",
  "info",
  "success",
  "warning",
  "error",
] as const;

const styleColors = (
  ownerState: LinearProgressProps,
  styles: (val: (typeof COLORS)[number]) => CSSObject,
) => {
  const outputStyle = COLORS.reduce((acc, color) => {
    if (ownerState.color === color) {
      acc = styles(color);
    }
    return acc;
  }, {});
  return outputStyle;
};

const MuiLinearProgress: Components<Theme>["MuiLinearProgress"] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const styled = {
        colors: styleColors(ownerState, (color) => ({
          backgroundColor: varAlpha(
            theme.vars.palette[color].mainChannel,
            0.24,
          ),
        })),
        inheritColor: {
          ...(ownerState.color === "inherit" && {
            "&::before": { display: "none" },
            backgroundColor: varAlpha(
              theme.vars.palette.text.primaryChannel,
              0.24,
            ),
          }),
        },
      };
      return {
        borderRadius: 4,
        ...(ownerState.variant !== "buffer" && {
          ...styled.inheritColor,
          ...styled.colors,
        }),
      };
    },
    bar: { borderRadius: "inherit" },
  },
};

export const progress = { MuiLinearProgress };
