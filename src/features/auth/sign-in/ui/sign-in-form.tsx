import { ROUTER_PATHS } from "@app/router";
import { useIsAuthStore } from "@features/auth/is-auth";
import { useSignInMutation } from "@generated";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, Button, Link, Stack, Typography } from "@mui/material";
import { useShowPassword } from "@shared/hooks/use-show-password";
import { RHFForm } from "@shared/ui/rhf-form";
import { RHFTextField } from "@shared/ui/rhf-textfield";
import { RHFTextFieldPassword } from "@shared/ui/rhf-textfield-password";
import { FC, useCallback, useId } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";

import { useFormDefaultValues } from "../hooks";
import { SignInSchema, SignInSchemaValues } from "../types";

type F = SignInSchemaValues;

export const SignInForm: FC = () => {
  const { t } = useTranslation();

  const id = useId();
  const { defaultValues } = useFormDefaultValues();
  const form = useForm<F>({
    mode: "onSubmit",
    resolver: zodResolver(SignInSchema),
    defaultValues,
  });
  const { reset: formReset } = form;

  const authState = useIsAuthStore();
  const [signIn, signInState] = useSignInMutation({
    onCompleted: () => {
      authState.set(true);
      formReset(defaultValues);
    },
  });
  const handleSubmit = useCallback(
    (input: F) => {
      signIn({ variables: { input } });
    },
    [signIn],
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
        <Typography variant="h5">{t("signIn")}</Typography>
        <Typography variant="body2" color="text.disabled">
          {t("signInDescription")}
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
          <RHFTextField<F>
            name="login"
            label={t("formSchema.login.label")}
            placeholder={t("formSchema.login.label")}
          />
          <RHFTextFieldPassword<F>
            {...showPassword}
            name="password"
            label={t("formSchema.password.label")}
            placeholder={t("formSchema.password.label")}
          />

          {signInState.error && (
            <Alert
              severity="error"
              sx={{
                width: "100%",
              }}
            >
              {signInState.error.message}
            </Alert>
          )}

          <Typography variant="body2" textAlign="end">
            <Link
              component={RouterLink}
              to={ROUTER_PATHS.FULL.SIGN_UP}
              underline="always"
            >
              {t("signUp")}
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
        loading={signInState.loading}
      >
        {t("signIn")}
      </Button>
    </Stack>
  );
};
