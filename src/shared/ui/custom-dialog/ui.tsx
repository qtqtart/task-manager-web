import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
} from "@mui/material";
import { FC, memo, ReactNode } from "react";

type Props = Omit<DialogProps, "title" | "content"> & {
  onClose: () => void;
  title: ReactNode;
  action: ReactNode;
  content?: ReactNode;
};

const CustomDialog_: FC<Props> = ({
  open,
  title,
  action,
  content,
  onClose,
  ...props
}) => {
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose} {...props}>
      <DialogTitle sx={{ pb: 2 }}>{title}</DialogTitle>
      {content && (
        <DialogContent sx={{ typography: "body2" }}> {content} </DialogContent>
      )}
      <DialogActions>{action}</DialogActions>
    </Dialog>
  );
};

export const CustomDialog = memo(CustomDialog_);
