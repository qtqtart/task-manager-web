import { CSSObject, PopoverOrigin } from "@mui/material";

import { PopoverArrow } from "./types";

export const calculateAnchorOrigin = (arrow: PopoverArrow["placement"]) => {
  let props: {
    paperStyles?: CSSObject;
    anchorOrigin: PopoverOrigin;
    transformOrigin: PopoverOrigin;
  };

  switch (arrow) {
    case "top-left":
      props = {
        paperStyles: { ml: -0.75 },
        anchorOrigin: { vertical: "bottom", horizontal: "left" },
        transformOrigin: { vertical: "top", horizontal: "left" },
      };
      break;
    case "top-center":
      props = {
        paperStyles: undefined,
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        transformOrigin: { vertical: "top", horizontal: "center" },
      };
      break;
    case "top-right":
      props = {
        paperStyles: { ml: 0.75 },
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        transformOrigin: { vertical: "top", horizontal: "right" },
      };
      break;
    case "bottom-left":
      props = {
        paperStyles: { ml: -0.75 },
        anchorOrigin: { vertical: "top", horizontal: "left" },
        transformOrigin: { vertical: "bottom", horizontal: "left" },
      };
      break;
    case "bottom-center":
      props = {
        paperStyles: undefined,
        anchorOrigin: { vertical: "top", horizontal: "center" },
        transformOrigin: { vertical: "bottom", horizontal: "center" },
      };
      break;
    case "bottom-right":
      props = {
        paperStyles: { ml: 0.75 },
        anchorOrigin: { vertical: "top", horizontal: "right" },
        transformOrigin: { vertical: "bottom", horizontal: "right" },
      };
      break;
    case "left-top":
      props = {
        paperStyles: { mt: -0.75 },
        anchorOrigin: { vertical: "top", horizontal: "right" },
        transformOrigin: { vertical: "top", horizontal: "left" },
      };
      break;
    case "left-center":
      props = {
        paperStyles: undefined,
        anchorOrigin: { vertical: "center", horizontal: "right" },
        transformOrigin: { vertical: "center", horizontal: "left" },
      };
      break;
    case "left-bottom":
      props = {
        paperStyles: { mt: 0.75 },
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        transformOrigin: { vertical: "bottom", horizontal: "left" },
      };
      break;
    case "right-top":
      props = {
        paperStyles: { mt: -0.75 },
        anchorOrigin: { vertical: "top", horizontal: "left" },
        transformOrigin: { vertical: "top", horizontal: "right" },
      };
      break;
    case "right-center":
      props = {
        paperStyles: undefined,
        anchorOrigin: { vertical: "center", horizontal: "left" },
        transformOrigin: { vertical: "center", horizontal: "right" },
      };
      break;
    case "right-bottom":
      props = {
        paperStyles: { mt: 0.75 },
        anchorOrigin: { vertical: "bottom", horizontal: "left" },
        transformOrigin: { vertical: "bottom", horizontal: "right" },
      };
      break;
    default:
      props = {
        paperStyles: { ml: 0.75 },
        anchorOrigin: { vertical: "bottom", horizontal: "right" },
        transformOrigin: { vertical: "top", horizontal: "right" },
      };
  }

  return props;
};
