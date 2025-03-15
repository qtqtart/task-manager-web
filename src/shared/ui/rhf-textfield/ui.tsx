import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  IconButton,
  InputAdornment,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { memo, useCallback, useState } from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
} & TextFieldProps;

const RHFTextField_ = <T extends FieldValues>({ name, ...props }: Props<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={field.value ?? ""}
          helperText={error ? error.message : undefined}
          error={!!error}
          {...props}
        />
      )}
    />
  );
};

export const RHFTextField = memo(RHFTextField_) as <T extends FieldValues>(
  props: Props<T>,
) => React.JSX.Element;

const RHFTextFieldPassword_ = <T extends FieldValues>({
  name,
  ...props
}: Props<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  const onShowPassword = useCallback(() => {
    setShowPassword(true);
  }, []);
  const onHidePassword = useCallback(() => {
    setShowPassword(false);
  }, []);

  return (
    <RHFTextField
      name={name}
      type={showPassword ? "text" : "password"}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              {showPassword ? (
                <IconButton onClick={onHidePassword}>
                  <VisibilityIcon />
                </IconButton>
              ) : (
                <IconButton onClick={onShowPassword}>
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
) => React.JSX.Element;
