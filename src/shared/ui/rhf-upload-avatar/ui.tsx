import CloseIcon from "@mui/icons-material/Close";
import UploadIcon from "@mui/icons-material/Upload";
import { Avatar, Fab, Stack } from "@mui/material";
import { memo, ReactElement, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
};

const RHFUploadAvatar_ = <T extends FieldValues>({ name }: Props<T>) => {
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
      "image/*": [".jpg", ".jpeg", ".png", ".webp", "gif"],
    },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024,
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
            variant="rounded"
            {...(file && {
              src: URL.createObjectURL(file),
            })}
            {...getRootProps()}
            sx={{
              width: {
                sm: "124px",
                xs: "100%",
              },
              height: "124px",
            }}
          >
            {!file && <UploadIcon />}
          </Avatar>

          <input {...getInputProps()} />

          {file && (
            <Fab
              color="default"
              size="small"
              onClick={handleRemoveFile}
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
              }}
            >
              <CloseIcon />
            </Fab>
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
) => ReactElement;
