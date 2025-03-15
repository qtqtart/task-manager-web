import CloseIcon from "@mui/icons-material/Close";
import UploadIcon from "@mui/icons-material/Upload";
import { alpha, Avatar, IconButton, Stack, useTheme } from "@mui/material";
import { memo, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
};

const RHFUploadAvatar_ = <T extends FieldValues>({ name }: Props<T>) => {
  const { palette } = useTheme();
  const { control, watch, setValue } = useFormContext<T>();
  const file = watch(name);

  const handleDropFile = useCallback(
    (files: File[]) => {
      if (files.length === 0) return;
      const file = files[0];
      setValue(name, file as T[Path<T>]);
    },
    [name, setValue],
  );

  const handleRemoveFile = useCallback(() => {
    setValue(name, null as T[Path<T>]);
  }, [name, setValue]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDropFile,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
    maxFiles: 1,
  });

  return (
    <Controller
      control={control}
      name={name}
      render={() => (
        <Stack
          sx={{
            position: "relative",
          }}
        >
          <Avatar
            src={file ? URL.createObjectURL(file) : undefined}
            sx={{
              width: "128px",
              height: "128px",
            }}
            {...getRootProps()}
          >
            {!file && <UploadIcon />}
          </Avatar>
          <input {...getInputProps()} />

          {file && (
            <IconButton
              onClick={handleRemoveFile}
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                border: `1px solid ${alpha(palette.text.primary, 0.23)}`,
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </Stack>
      )}
    />
  );
};

export const RHFUploadAvatar = memo(RHFUploadAvatar_) as <
  T extends FieldValues,
>(
  props: Props<T>,
) => React.JSX.Element;
