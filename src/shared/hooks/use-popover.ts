import { MouseEvent } from "react";
import { useCallback, useState } from "react";

export function usePopover() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = !!anchorEl;
  const onOpen = useCallback(
    ({ currentTarget }: MouseEvent<HTMLElement>, fn?: VoidFunction) => {
      if (typeof fn === "function") fn();
      setAnchorEl(currentTarget);
    },
    [],
  );
  const onClose: VoidFunction = useCallback((fn?: VoidFunction) => {
    if (typeof fn === "function") fn();
    setAnchorEl(null);
  }, []);

  return {
    anchorEl,
    open,
    onClose,
    onOpen,
  };
}
