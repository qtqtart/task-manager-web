import { styled } from "@mui/material";
import { ComponentProps } from "react";
import SimpleBar from "simplebar-react";

import { Scrollbar } from "./scrollbar";

export const ScrollbarRoot = styled(SimpleBar, {
  shouldForwardProp: (prop: string) => !["fillContent", "sx"].includes(prop),
})<Pick<ComponentProps<typeof Scrollbar>, "fillContent">>(
  ({ fillContent }) => ({
    minWidth: 0,
    minHeight: 0,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    ...(fillContent && {
      "& .simplebar-content": {
        display: "flex",
        flex: "1 1 auto",
        minHeight: "100%",
        flexDirection: "column",
      },
    }),
  }),
);
