import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";
import { useShowPassword } from "@shared/hooks/use-show-password";
import { ComponentProps, memo, ReactElement } from "react";
import { FieldValues } from "react-hook-form";

import { RHFTextField } from "../rhf-textfield/ui";

type Props<T extends FieldValues> = ComponentProps<typeof RHFTextField<T>> &
  ReturnType<typeof useShowPassword>;

const RHFTextFieldPassword_ = <T extends FieldValues>({
  name,
  show,
  handleShow,
  handleHide,
  ...props
}: Props<T>) => {
  return (
    <RHFTextField
      name={name}
      type={show ? "text" : "password"}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              {show ? (
                <IconButton onClick={handleHide}>
                  <VisibilityIcon />
                </IconButton>
              ) : (
                <IconButton onClick={handleShow}>
                  <VisibilityOffIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        },
      }}
      {...props}
    />
  );
};

export const RHFTextFieldPassword = memo(RHFTextFieldPassword_) as <
  T extends FieldValues,
>(
  props: Props<T>,
) => ReactElement;
