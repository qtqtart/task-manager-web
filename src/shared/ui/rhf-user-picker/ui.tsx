import { varAlpha } from "@app/styles";
import { useGetAllUsersLazyQuery } from "@generated";
import { Check } from "@mui/icons-material";
import {
  Autocomplete,
  Avatar,
  Chip,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  TextFieldProps,
  useTheme,
} from "@mui/material";
import { memo, ReactElement, useCallback, useMemo, useState } from "react";
import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

type Props<T extends FieldValues> = {
  name: Path<T>;
} & Pick<TextFieldProps, "label" | "placeholder">;

const RHFUserPicker_ = <T extends FieldValues>({
  name,
  label,
  placeholder,
}: Props<T>) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const { control } = useFormContext<T>();

  const [trigger, usersState] = useGetAllUsersLazyQuery();
  const options = useMemo(
    () =>
      usersState.data?.getAllUsers?.map((user) => ({
        id: user.id,
        username: user.username,
        imageUrl: user.imageUrl ?? undefined,
      })) || [],
    [usersState.data?.getAllUsers],
  );

  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => {
    setOpen(true);
    trigger();
  }, [setOpen, trigger]);
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
          loading={usersState.loading}
          loadingText={`${t("loading")}...`}
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
                  <Avatar src={option.imageUrl}>
                    {option.username[0].toUpperCase()}
                  </Avatar>
                }
              />
            ))
          }
          renderOption={(getProps, option, { selected }) => (
            <MenuItem {...getProps} key={option.id}>
              <ListItemAvatar>
                <Avatar
                  src={option.imageUrl}
                  sx={{
                    position: "relative",
                  }}
                >
                  {option.username[0].toUpperCase()}

                  {selected && (
                    <Stack
                      sx={{
                        position: "absolute",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        backgroundColor: varAlpha(
                          theme.vars.palette.grey["900Channel"],
                          0.8,
                        ),
                      }}
                    >
                      <Check
                        sx={{
                          color: "success.main",
                        }}
                      />
                    </Stack>
                  )}
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
