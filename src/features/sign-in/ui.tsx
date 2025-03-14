import { setAccessToken } from "@features/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Alert, Stack, Typography } from "@mui/material";
import { ROUTER_PATHS } from "@shared/router";
import { RHFForm } from "@shared/ui/rhf-form";
import { RHFTextField, RHFTextFieldPassword } from "@shared/ui/rhf-textfield";
import { FC, useCallback, useEffect, useId } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { useSignInMutation } from "./api";
import { useFormDefaultValues } from "./lib/hooks";
import { SignInSchema, SignInSchemaValues } from "./models/schema";

export const SignInForm: FC = () => {
  const { t } = useTranslation();
  const { defaultValues } = useFormDefaultValues();
  const id = useId();
  const form = useForm({
    mode: "onSubmit",
    resolver: zodResolver(SignInSchema),
    defaultValues,
  });
  const navigate = useNavigate();

  const [signIn, { isLoading, isSuccess, isError, error }] =
    useSignInMutation();
  const handleSubmit = useCallback(
    async (values: SignInSchemaValues) => {
      const { accessToken } = await signIn(values).unwrap();
      setAccessToken(accessToken);
    },
    [signIn],
  );

  useEffect(() => {
    if (!isSuccess) return;
    form.reset(defaultValues);
    navigate(ROUTER_PATHS.FULL.ANALYTICS);
  }, [isSuccess, defaultValues, form, navigate]);

  return (
    <>
      <Stack
        sx={{
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Typography variant="subtitle1">{t("sign-in")}</Typography>
        <RHFForm id={id} form={form} onSubmit={form.handleSubmit(handleSubmit)}>
          <RHFTextField
            name="login"
            label={t("login")}
            placeholder={t("login")}
          />
          <RHFTextFieldPassword
            name="password"
            label={t("password")}
            placeholder={t("password")}
          />
          {isError && <Alert severity="error">{error.message}</Alert>}
        </RHFForm>

        <LoadingButton
          fullWidth
          form={id}
          type="submit"
          loading={isLoading}
          variant="outlined"
          size="large"
        >
          {t("sign-in")}
        </LoadingButton>
      </Stack>
    </>
  );
};
