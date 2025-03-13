import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

export const useResponsive = (
  query: "only" | "up" | "down",
  breakpoint: Breakpoint,
) => {
  const { breakpoints } = useTheme();

  const mediaOnly = useMediaQuery(breakpoints.only(breakpoint));
  const mediaUp = useMediaQuery(breakpoints.up(breakpoint));
  const mediaDown = useMediaQuery(breakpoints.down(breakpoint));

  if (query === "only") return mediaOnly;
  if (query === "up") return mediaUp;
  if (query === "down") return mediaDown;

  return undefined;
};
