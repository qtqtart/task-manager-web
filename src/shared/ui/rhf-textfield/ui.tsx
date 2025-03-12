import { TextField, TextFieldProps } from "@mui/material";
import { memo } from "react";
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

export const RHFTextField = memo(RHFTextField_);
