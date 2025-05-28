import { ROUTER_PATHS } from "@app/router";
import { useAuthState } from "@features/auth/auth-state";
import { useUploadMutation } from "@features/upload";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, Link, Stack, Typography } from "@mui/material";
import { useShowPassword } from "@shared/hooks/use-show-password";
import {
  RHFForm,
  RHFTextField,
  RHFTextFieldPassword,
  RHFUploadAvatar,
} from "@shared/ui/rhf";
import { FC, useCallback, useId } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

import { useSignUpMutation } from "../api";
import { useFormDefaultValues } from "../hooks";
import { SignUpSchema, SignUpSchemaValues } from "../types";

type F = SignUpSchemaValues;

export const SignUpForm: FC = () => {
  const { t } = useTranslation();

  const { defaultValues } = useFormDefaultValues();
  const formId = useId();
  const form = useForm<F>({
    mode: "onSubmit",
    resolver: zodResolver(SignUpSchema),
    defaultValues,
  });
  const { reset } = form;

  const authState = useAuthState();
  const [upload] = useUploadMutation();
  const [signUp, signUpState] = useSignUpMutation();
  const handleSubmit = useCallback(
    async ({ file, ...values }: F) => {
      let imageUrl: string | undefined;
      if (file) {
        imageUrl = await upload({ file }).unwrap();
      }

      const res = await signUp({
        ...values,
        ...(values.firstName && {
          firstName: values.firstName,
        }),
        ...(values.lastName && {
          lastName: values.lastName,
        }),
        ...(imageUrl && {
          imageUrl,
        }),
      }).unwrap();
      if (res) {
        authState.set({ isAuth: true });
        reset(defaultValues);
      }
    },
    [upload, signUp, authState, reset, defaultValues],
  );

  const showPassword = useShowPassword();

  return (
    <Stack
      sx={{
        flexDirection: "column",
        gap: 3,
        height: "100%",
      }}
    >
      <Stack
        sx={{
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h5">{t("signUp")}</Typography>
        <Typography variant="body2" color="text.disabled">
          {t("signUpDescription")}
        </Typography>
      </Stack>

      <RHFForm<F>
        id={formId}
        form={form}
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <Stack
          sx={{
            flexDirection: "column",
            gap: 2,
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
                name="firstName"
                label={t("formSchema.firstName.label")}
                placeholder={t("formSchema.firstName.label")}
              />
              <RHFTextField<F>
                name="lastName"
                label={t("formSchema.lastName.label")}
                placeholder={t("formSchema.lastName.label")}
              />
            </Stack>

            <RHFUploadAvatar<F>
              name="file"
              sx={{
                height: "124px",
                width: {
                  sm: "124px",
                  xs: "100%",
                },
              }}
            />
          </Stack>

          <RHFTextField<F>
            name="username"
            label={t("formSchema.username.label")}
            placeholder={t("formSchema.username.label")}
          />
          <RHFTextField<F>
            name="email"
            label={t("formSchema.email.label")}
            placeholder={t("formSchema.email.label")}
          />
          <RHFTextFieldPassword<F>
            {...showPassword}
            name="password"
            label={t("formSchema.password.label")}
            placeholder={t("formSchema.password.label")}
          />
          <RHFTextFieldPassword<F>
            {...showPassword}
            name="passwordConfirm"
            label={t("formSchema.passwordConfirm.label")}
            placeholder={t("formSchema.passwordConfirm.label")}
          />

          {signUpState.error && (
            <Alert
              severity="error"
              sx={{
                width: "100%",
                wordBreak: "break-all",
              }}
            >
              {signUpState.error.message}
            </Alert>
          )}

          <Typography variant="body2" textAlign="end">
            <Link
              component={RouterLink}
              to={ROUTER_PATHS.FULL.SIGN_IN}
              underline="always"
            >
              {t("signIn")}
            </Link>
          </Typography>
        </Stack>
      </RHFForm>

      <Button
        fullWidth
        form={formId}
        type="submit"
        variant="contained"
        size="medium"
        loading={signUpState.isLoading}
      >
        {t("signUp")}
      </Button>
    </Stack>
  );
};
