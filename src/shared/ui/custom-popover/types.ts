import { SxProps, Theme } from "@mui/material";

export type PopoverArrow = {
  hide?: boolean;
  size?: number;
  offset?: number;
  sx?: SxProps<Theme>;
  placement?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"
    | "left-top"
    | "left-center"
    | "left-bottom"
    | "right-top"
    | "right-center"
    | "right-bottom";
};
