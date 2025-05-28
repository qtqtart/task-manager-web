import { UserModel } from "@entities/user";
import {
  Autocomplete,
  Avatar,
  Chip,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { memo, ReactElement, useCallback, useState } from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

type Props<T extends FieldValues> = {
  name: Path<T>;
  loading: boolean;
  fetchUsers: () => void;
  options: Pick<UserModel, "id" | "username" | "imageUrl">[];
} & Pick<TextFieldProps, "label" | "placeholder">;

const RHFUserPicker_ = <T extends FieldValues>({
  name,
  loading,
  fetchUsers,
  options,
  label,
  placeholder,
}: Props<T>) => {
  const { t } = useTranslation();

  const { control } = useFormContext<T>();

  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setOpen(true);
    fetchUsers();
  }, [setOpen, fetchUsers]);
  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Autocomplete
          multiple
          loadingText={`${t("loading")}...`}
          noOptionsText={t("options_not_found")}
          loading={loading}
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
          value={field.value || []}
          onChange={(_, value) => field.onChange(value)}
          options={options}
          getOptionLabel={(option) => option.username}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          renderInput={(inputProps) => (
            <TextField
              {...inputProps}
              label={label}
              placeholder={placeholder}
            />
          )}
          renderTags={(value, getProps) =>
            value.map((option, index) => (
              <Chip
                {...getProps({ index })}
                key={option.id}
                label={option.username}
                avatar={
                  <Avatar src={option.imageUrl} alt={option.username}>
                    {option.username[0].toUpperCase()}
                  </Avatar>
                }
              />
            ))
          }
          renderOption={(getProps, option) => (
            <MenuItem {...getProps} key={option.id}>
              <ListItemAvatar>
                <Avatar
                  src={option.imageUrl}
                  sx={{
                    position: "relative",
                  }}
                >
                  {option.username[0].toUpperCase()}
                </Avatar>
              </ListItemAvatar>

              <ListItemText
                primary={option.username}
                slotProps={{
                  primary: {
                    typography: "body2",
                  },
                }}
              />
            </MenuItem>
          )}
          slotProps={{
            listbox: {
              sx: {
                maxHeight: "340px",
              },
            },
          }}
        />
      )}
    />
  );
};

export const RHFUserPicker = memo(RHFUserPicker_) as <T extends FieldValues>(
  props: Props<T>,
) => ReactElement;
