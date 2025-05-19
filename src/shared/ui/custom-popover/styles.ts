import { CSSObject, Theme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { varAlpha } from "minimal-shared/utils";

import { PopoverArrow } from "./types";

const centerStyles: Record<string, CSSObject> = {
  hCenter: { left: 0, right: 0, margin: "auto" },
  vCenter: { top: 0, bottom: 0, margin: "auto" },
};

const createBackgroundStyles = (
  theme: Theme,
  color: "cyan" | "red",
  size: number,
): CSSObject => {
  const colorChannel =
    theme.vars.palette[color === "cyan" ? "info" : "error"].mainChannel;

  return {
    backgroundRepeat: "no-repeat",
    backgroundSize: `${size * 3}px ${size * 3}px`,
    backgroundColor: theme.vars.palette.background.paper,
    backgroundPosition: color === "cyan" ? "top right" : "bottom left",
    backgroundImage: `linear-gradient(45deg, ${varAlpha(colorChannel, 0.1)}, ${varAlpha(colorChannel, 0.1)})`,
  };
};

const arrowDirection: Record<string, CSSObject> = {
  top: { top: 0, rotate: "135deg", translate: "0 -50%" },
  bottom: { bottom: 0, rotate: "-45deg", translate: "0 50%" },
  left: { rotate: "45deg", translate: "-50% 0" },
  right: { rotate: "-135deg", translate: "50% 0" },
};

export const Arrow = styled("span", {
  shouldForwardProp: (prop: string) =>
    !["size", "placement", "offset", "sx"].includes(prop),
})<PopoverArrow>(({ offset = 0, size = 0, theme }) => {
  const cyanBackgroundStyles = createBackgroundStyles(theme, "cyan", size);
  const redBackgroundStyles = createBackgroundStyles(theme, "red", size);

  return {
    width: size,
    height: size,
    position: "absolute",
    backdropFilter: "6px",
    borderBottomLeftRadius: size / 4,
    clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
    backgroundColor: theme.vars.palette.background.paper,
    border: `solid 1px ${varAlpha(theme.vars.palette.grey["500Channel"], 0.12)}`,
    ...theme.applyStyles("dark", {
      border: `solid 1px ${varAlpha(theme.vars.palette.common.blackChannel, 0.12)}`,
    }),

    variants: [
      {
        props: ({ placement }) => placement?.startsWith("top-"),
        style: { ...arrowDirection.top },
      },
      {
        props: { placement: "top-left" },
        style: { left: offset },
      },
      {
        props: { placement: "top-center" },
        style: { ...centerStyles.hCenter },
      },
      {
        props: { placement: "top-right" },
        style: {
          right: offset,
          ...cyanBackgroundStyles,
        },
      },
      {
        props: ({ placement }) => placement?.startsWith("bottom-"),
        style: { ...arrowDirection.bottom },
      },
      {
        props: { placement: "bottom-left" },
        style: {
          left: offset,
          ...redBackgroundStyles,
        },
      },
      {
        props: { placement: "bottom-center" },
        style: { ...centerStyles.hCenter },
      },
      {
        props: { placement: "bottom-right" },
        style: { right: offset },
      },
      {
        props: ({ placement }) => placement?.startsWith("left-"),
        style: { left: 0, ...arrowDirection.left },
      },
      {
        props: { placement: "left-top" },
        style: { top: offset },
      },
      {
        props: { placement: "left-center" },
        style: { ...centerStyles.vCenter, ...redBackgroundStyles },
      },
      {
        props: { placement: "left-bottom" },
        style: { ...redBackgroundStyles, bottom: offset },
      },
      {
        props: ({ placement }) => placement?.startsWith("right-"),
        style: {
          right: 0,
          ...arrowDirection.right,
        },
      },
      {
        props: { placement: "right-top" },
        style: { ...cyanBackgroundStyles, top: offset },
      },
      {
        props: { placement: "right-center" },
        style: { ...centerStyles.vCenter, ...cyanBackgroundStyles },
      },
      {
        props: { placement: "right-bottom" },
        style: { bottom: offset },
      },
    ],
  };
});
