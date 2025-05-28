import { varAlpha } from "@app/styles";
import CloseIcon from "@mui/icons-material/Close";
import UploadIcon from "@mui/icons-material/Upload";
import { Avatar, IconButton, Stack, SxProps, Theme } from "@mui/material";
import { memo, ReactElement, useCallback, useId } from "react";
import { useDropzone } from "react-dropzone";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  sx?: SxProps<Theme>;
  imageUrl?: string;
};

const RHFUploadAvatar_ = <T extends FieldValues>({ name, sx }: Props<T>) => {
  const id = useId();

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
    setValue(name, undefined as T[Path<T>]);
  }, [name, setValue]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDropFile,
    accept: {
      "image/*": [".jpg", ".jpeg", ".png", ".webp", ".gif"],
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
            "&:hover": {
              cursor: "pointer",
              [`& #${id}`]: {
                opacity: 1,
              },
            },
          }}
        >
          <Avatar
            variant="rounded"
            {...(file && {
              src: typeof file === "string" ? file : URL.createObjectURL(file),
            })}
            {...getRootProps()}
            sx={sx}
          >
            {!file && <UploadIcon />}
          </Avatar>

          <input {...getInputProps()} />

          {file && (
            <IconButton
              id={id}
              onClick={handleRemoveFile}
              sx={(theme) => ({
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: `${varAlpha(
                  theme.vars.palette.grey["900Channel"],
                  0.8,
                )} !important`,
                transition: "opacity 0.3s ease-in-out",
                opacity: 0,
                zIndex: 10000,
              })}
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
) => ReactElement;
