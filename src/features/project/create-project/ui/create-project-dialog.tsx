import { useLazyGetAllUsersQuery } from "@entities/user";
import { useUploadMutation } from "@features/upload";
import { zodResolver } from "@hookform/resolvers/zod";
import CloseFullscreen from "@mui/icons-material/CloseFullscreen";
import Fullscreen from "@mui/icons-material/Fullscreen";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useDialog } from "@shared/hooks/use-dialog";
import {
  RHFForm,
  RHFTextField,
  RHFUploadAvatar,
  RHFUserPicker,
} from "@shared/ui/rhf";
import { FC, memo, useCallback, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useCreateProjectMutation } from "../api";
import { useFormDefaultValues } from "../hooks";
import { CreateProjectSchema, CreateProjectSchemaValues } from "../types";

type F = CreateProjectSchemaValues;
type Props = Omit<ReturnType<typeof useDialog>, "onOpen">;

const CreateProjectDialog_: FC<Props> = ({ open, onClose }) => {
  const { t } = useTranslation();

  const { defaultValues } = useFormDefaultValues();
  const formId = useId();
  const form = useForm<F>({
    mode: "onSubmit",
    resolver: zodResolver(CreateProjectSchema),
    defaultValues,
  });
  const { reset } = form;
  console.log(form.formState.errors);

  const [fetchUsers, fetchUsersState] = useLazyGetAllUsersQuery();
  const [upload] = useUploadMutation();
  const [createProject, createProjectState] = useCreateProjectMutation();
  const handleSubmit = useCallback(
    async ({ file, ...values }: F) => {
      let imageUrl: string | null = null;
      if (file) {
        imageUrl = await upload({ file }).unwrap();
      }

      const res = await createProject({
        title: values.title,
        description: values.description,
        memberIds: values.memberIds.map(({ id }) => id),
        imageUrl,
      }).unwrap();
      if (res) {
        reset(defaultValues);
        onClose();
      }
    },
    [upload, createProject, reset, defaultValues, onClose],
  );

  const [fullScreen, setFullScreen] = useState(false);

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
    >
      <DialogTitle
        component={Stack}
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>{t("createProject")}</Typography>

        <IconButton onClick={() => setFullScreen((prev) => !prev)}>
          {fullScreen ? <CloseFullscreen /> : <Fullscreen />}
        </IconButton>
      </DialogTitle>

      <DialogContent
        sx={{
          mt: "-8px",
          pt: "8px !important",
        }}
      >
        <RHFForm<F>
          id={formId}
          form={form}
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <Stack
            sx={{
              flexDirection: "column",
              gap: 3,
            }}
          >
            <Stack
              sx={{
                flexDirection: "row",
                alignItems: "center",
                gap: 3,
              }}
            >
              <RHFTextField<F>
                name="title"
                label={t("formSchema.title.label")}
                placeholder={t("formSchema.title.label")}
              />

              <RHFUploadAvatar<F>
                name="file"
                sx={{
                  width: "54px",
                  height: "54px",
                }}
              />
            </Stack>

            <RHFTextField<F>
              name="description"
              label={t("formSchema.description.label")}
              placeholder={t("formSchema.description.label")}
              multiline
              minRows={5}
              maxRows={5}
            />

            <RHFUserPicker<F>
              name="memberIds"
              label={t("formSchema.members.label")}
              placeholder={t("formSchema.members.placeholder")}
              loading={fetchUsersState.isFetching}
              fetchUsers={fetchUsers}
              options={fetchUsersState.data || []}
            />

            {createProjectState.isError && (
              <Alert severity="error">{createProjectState.error.message}</Alert>
            )}
          </Stack>
        </RHFForm>
      </DialogContent>

      <DialogActions>
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Button
            form={formId}
            type="submit"
            variant="contained"
            size="medium"
            loading={createProjectState.isLoading}
          >
            {t("apply")}
          </Button>

          <Button variant="outlined" onClick={onClose}>
            {t("cancel")}
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export const CreateProjectDialog = memo(CreateProjectDialog_);
