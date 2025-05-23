import { ROUTER_PATHS } from "@app/router";
import { useIsAuthStore } from "@features/auth/is-auth";
import { useSignUpMutation } from "@generated";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, Link, Stack, Typography } from "@mui/material";
import { useShowPassword } from "@shared/hooks/use-show-password";
import { RHFForm } from "@shared/ui/rhf-form";
import { RHFTextField } from "@shared/ui/rhf-textfield";
import { RHFTextFieldPassword } from "@shared/ui/rhf-textfield-password";
import { RHFUploadAvatar } from "@shared/ui/rhf-upload-avatar";
import { FC, useCallback, useId } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

import { useFormDefaultValues } from "../hooks";
import { SignUpSchema, SignUpSchemaValues } from "../types";

type F = SignUpSchemaValues;

export const SignUpForm: FC = () => {
  const { t } = useTranslation();

  const id = useId();
  const { defaultValues } = useFormDefaultValues();
  const form = useForm<F>({
    mode: "onSubmit",
    resolver: zodResolver(SignUpSchema),
    defaultValues,
  });
  const { reset: formReset } = form;

  const authState = useIsAuthStore();
  const [signUp, signUpState] = useSignUpMutation({
    onCompleted: () => {
      authState.set(true);
      formReset(defaultValues);
    },
  });
  const handleSubmit = useCallback(
    ({ file, ...input }: F) => {
      signUp({
        variables: {
          input,
          file,
        },
      });
    },
    [signUp],
  );

  const showPassword = useShowPassword();

  return (
    <Stack
      sx={{
        flexDirection: "column",
        gap: 3,
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
        id={id}
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

            <RHFUploadAvatar<F> name="file" />
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
        form={id}
        type="submit"
        variant="contained"
        size="medium"
        loading={signUpState.loading}
      >
        {t("signUp")}
      </Button>
    </Stack>
  );
};
