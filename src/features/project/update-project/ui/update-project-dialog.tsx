import { ProjectModel } from "@entities/project/types";
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
import { FC, memo, useCallback, useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useUpdateProjectMutation } from "../api";
import { useFormDefaultValues } from "../hooks";
import { UpdateProjectSchema, UpdateProjectSchemaValues } from "../types";

type F = UpdateProjectSchemaValues;
type Props = Omit<ReturnType<typeof useDialog>, "onOpen"> & {
  project: ProjectModel;
};

const UpdateProjectDialog_: FC<Props> = ({ project, open, onClose }) => {
  const { t } = useTranslation();

  const { defaultValues } = useFormDefaultValues();
  const formId = useId();
  const form = useForm<F>({
    mode: "onSubmit",
    resolver: zodResolver(UpdateProjectSchema),
    defaultValues,
  });
  const { reset } = form;

  console.log(form.formState.errors);

  const [fetchUsers, fetchUsersState] = useLazyGetAllUsersQuery();
  const [upload] = useUploadMutation();
  const [updateProject, updateProjectState] = useUpdateProjectMutation();
  const handleSubmit = useCallback(
    async ({ file, ...values }: F) => {
      let imageUrl: string | null = null;
      if (file) {
        imageUrl =
          typeof file === "string" ? file : await upload({ file }).unwrap();
      }

      const res = await updateProject({
        id: project.id,
        data: {
          title: values.title,
          description: values.description,
          memberIds: values.memberIds.map(({ id }) => id) || [],
          imageUrl: imageUrl ?? null,
        },
      }).unwrap();
      if (res) {
        reset(defaultValues);
        onClose();
      }
    },
    [project.id, upload, updateProject, reset, defaultValues, onClose],
  );

  useEffect(() => {
    reset({
      title: project.title,
      description: project.description,
      memberIds: project.members,
      file: project.imageUrl,
    });
  }, [
    project.title,
    project.description,
    project.members,
    project.imageUrl,
    reset,
  ]);

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
        <Typography>{t("editProject")}</Typography>

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

            {updateProjectState.isError && (
              <Alert severity="error">{updateProjectState.error.message}</Alert>
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
            loading={updateProjectState.isLoading}
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

export const UpdateProjectDialog = memo(UpdateProjectDialog_);
