import { useCallback, useState } from "react";

export function useDrawer() {
  const [open, setOpen] = useState(false);
  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);
  const onClose = useCallback(() => {
    setOpen(false);
  }, []);
  const onToggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return {
    open,
    onOpen,
    onClose,
    onToggle,
  };
}
