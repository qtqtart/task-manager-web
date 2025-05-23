import { useCreateProjectMutation } from "@generated";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Stack } from "@mui/material";
import { RHFForm } from "@shared/ui/rhf-form";
import { RHFTextField } from "@shared/ui/rhf-textfield";
import { RHFUploadAvatar } from "@shared/ui/rhf-upload-avatar";
import { RHFUserPicker } from "@shared/ui/rhf-user-picker";
import { FC, memo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useFormDefaultValues } from "../hooks";
import { CreateProjectSchema, CreateProjectSchemaValues } from "../types";

type F = CreateProjectSchemaValues;

type Props = {
  id: string;
  onClose: () => void;
};

const CreateProjectForm_: FC<Props> = ({ id, onClose }) => {
  const { t } = useTranslation();

  const { defaultValues } = useFormDefaultValues();
  const form = useForm<F>({
    mode: "onSubmit",
    resolver: zodResolver(CreateProjectSchema),
    defaultValues,
  });
  const { reset: formReset } = form;

  const [createProject, createProjectState] = useCreateProjectMutation({
    onCompleted: () => {
      formReset(defaultValues);
      onClose();
    },
  });
  const handleSubmit = useCallback(
    ({ file, ...input }: F) => {
      createProject({
        variables: {
          input: {
            title: input.title,
            description: input.description,
            memberIds: input.members.map((member) => member.id),
          },
          file,
        },
      });
    },
    [createProject],
  );

  console.log(form.formState.errors);

  return (
    <RHFForm<F> id={id} form={form} onSubmit={form.handleSubmit(handleSubmit)}>
      <Stack
        sx={{
          flexDirection: "column",
          gap: 2,
          mt: 1,
        }}
      >
        <Stack
          sx={{
            flexDirection: {
              sm: "row",
              xs: "column-reverse",
            },
            gap: 2,
          }}
        >
          <Stack
            sx={{
              flexDirection: "column",
              gap: 2,
              width: "100%",
            }}
          >
            <RHFTextField<F>
              name="title"
              label={t("formSchema.title.label")}
              placeholder={t("formSchema.title.label")}
            />
            <RHFTextField<F>
              name="description"
              multiline
              label={t("formSchema.description.label")}
              placeholder={t("formSchema.description.label")}
            />
          </Stack>

          <RHFUploadAvatar<F> name="file" />
        </Stack>

        <RHFUserPicker<F>
          name="members"
          label={t("members")}
          placeholder={t("members")}
        />

        {createProjectState.error && (
          <Alert
            severity="error"
            sx={{
              width: "100%",
            }}
          >
            {createProjectState.error.message}
          </Alert>
        )}
      </Stack>
    </RHFForm>
  );
};

export const CreateProjectForm = memo(CreateProjectForm_);
