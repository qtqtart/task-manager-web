import { MouseEvent } from "react";
import { useCallback, useState } from "react";

export function usePopover() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleOpenPopover = useCallback(
    ({ currentTarget }: MouseEvent<HTMLElement>, fn?: VoidFunction) => {
      if (typeof fn === "function") fn();
      setAnchorEl(currentTarget);
    },
    [],
  );
  const handleClosePopover: VoidFunction = useCallback((fn?: VoidFunction) => {
    if (typeof fn === "function") fn();
    setAnchorEl(null);
  }, []);
  const isOpenPopover = !!anchorEl;

  return {
    anchorEl,
    isOpenPopover,
    handleClosePopover,
    handleOpenPopover,
  };
}
