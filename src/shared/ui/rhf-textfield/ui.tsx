import { TextField, TextFieldProps } from "@mui/material";
import {
  transformValue,
  transformValueOnBlur,
  transformValueOnChange,
} from "minimal-shared/utils";
import { memo, ReactElement } from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  type?: string;
  helperText?: string;
} & Omit<TextFieldProps, "name">;

const RHFTextField_ = <T extends FieldValues>({
  name,
  type = "text",
  helperText,
  slotProps,
  ...props
}: Props<T>) => {
  const { control } = useFormContext<T>();
  const isNumber = type === "number";

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={isNumber ? transformValue(field.value) : field.value}
          onChange={(event) => {
            field.onChange(
              isNumber
                ? transformValueOnChange(event.target.value)
                : event.target.value,
            );
          }}
          onBlur={(event) => {
            field.onChange(
              isNumber
                ? transformValueOnBlur(event.target.value)
                : event.target.value,
            );
            field.onBlur();
          }}
          type={isNumber ? "text" : type}
          error={!!error}
          helperText={error?.message ?? helperText}
          slotProps={{
            ...slotProps,
            input: {
              autoComplete: "off",
              ...(slotProps?.input as object),
              ...(isNumber && {
                inputMode: "decimal",
                pattern: "[0-9]*\\.?[0-9]*",
              }),
            },
          }}
          {...props}
        />
      )}
    />
  );
};

export const RHFTextField = memo(RHFTextField_) as <T extends FieldValues>(
  props: Props<T>,
) => ReactElement;
