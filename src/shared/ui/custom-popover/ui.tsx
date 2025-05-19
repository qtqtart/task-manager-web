import {
  listClasses,
  menuItemClasses,
  PaperProps,
  Popover,
  PopoverProps,
} from "@mui/material";
import { FC, memo } from "react";

import { Arrow } from "./styles";
import { PopoverArrow } from "./types";
import { calculateAnchorOrigin } from "./utils";

type Props = PopoverProps & {
  slotProps?: PopoverProps["slotProps"] & {
    arrow?: PopoverArrow;
    paper?: PaperProps;
  };
};

const CustomPopover_: FC<Props> = ({
  open,
  onClose,
  children,
  anchorEl,
  slotProps,
  ...props
}) => {
  const {
    arrow: arrowProps,
    paper: paperProps,
    ...otherSlotProps
  } = slotProps ?? {};

  const arrowSize = arrowProps?.size ?? 14;
  const arrowOffset = arrowProps?.offset ?? 17;
  const arrowPlacement = arrowProps?.placement ?? "top-right";

  const { paperStyles, anchorOrigin, transformOrigin } =
    calculateAnchorOrigin(arrowPlacement);

  return (
    <Popover
      open={!!open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      slotProps={{
        ...otherSlotProps,
        paper: {
          ...paperProps,
          sx: [
            paperStyles,
            {
              overflow: "inherit",
              [`& .${listClasses.root}`]: { minWidth: 140 },
              [`& .${menuItemClasses.root}`]: { gap: 2 },
            },
            ...(Array.isArray(paperProps?.sx)
              ? (paperProps?.sx ?? [])
              : [paperProps?.sx]),
          ],
        },
      }}
      {...props}
    >
      {!arrowProps?.hide && (
        <Arrow
          size={arrowSize}
          offset={arrowOffset}
          placement={arrowPlacement}
          sx={arrowProps?.sx}
        />
      )}
      {children}
    </Popover>
  );
};

export const CustomPopover = memo(CustomPopover_);
