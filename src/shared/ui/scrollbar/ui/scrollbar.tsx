import { SxProps, Theme } from "@mui/material/styles";
import { ComponentProps, FC, memo } from "react";
import { Props as ScrollbarProps } from "simplebar-react";

import { scrollbarClasses } from "../consts";
import { ScrollbarRoot } from "./scrollbar-root";

type Props = ScrollbarProps &
  ComponentProps<"div"> & {
    sx?: SxProps<Theme>;
    fillContent?: boolean;
    slotProps?: {
      wrapperSx?: SxProps<Theme>;
      contentSx?: SxProps<Theme>;
      contentWrapperSx?: SxProps<Theme>;
    };
  };

const Scrollbar_: FC<Props> = ({
  sx,
  ref,
  children,
  slotProps,
  fillContent = true,
  ...other
}) => {
  return (
    <ScrollbarRoot
      clickOnTrack={false}
      scrollableNodeProps={{ ref }}
      fillContent={fillContent}
      className={scrollbarClasses.root}
      sx={[
        {
          "& .simplebar-wrapper": slotProps?.wrapperSx,
          "& .simplebar-content-wrapper": slotProps?.contentWrapperSx,
          "& .simplebar-content": slotProps?.contentSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {children}
    </ScrollbarRoot>
  );
};

export const Scrollbar = memo(Scrollbar_);
