import { setAccessToken } from "@features/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Alert, Link, Stack, Typography, useTheme } from "@mui/material";
import { ROUTER_PATHS } from "@shared/router";
import { RHFForm } from "@shared/ui/rhf-form";
import { RHFTextField, RHFTextFieldPassword } from "@shared/ui/rhf-textfield";
import { FC, useCallback, useEffect, useId } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

import { useSignInMutation } from "./api";
import { useFormDefaultValues } from "./lib/hooks";
import {
  SignInSchema as Schema,
  SignInSchemaValues as SchemaValues,
} from "./models/schema";

export const SignInForm: FC = () => {
  const { t } = useTranslation();
  const { palette } = useTheme();
  const { defaultValues } = useFormDefaultValues();
  const id = useId();
  const form = useForm<SchemaValues>({
    mode: "onSubmit",
    resolver: zodResolver(Schema),
    defaultValues,
  });
  const navigate = useNavigate();

  const [signIn, { isLoading, isSuccess, isError, error }] =
    useSignInMutation();
  const handleSubmit = useCallback(
    async (values: SchemaValues) => {
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
    <Stack
      sx={{
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <Stack
        sx={{
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Typography variant="subtitle1">{t("signIn")}</Typography>
        <Typography
          variant="body2"
          sx={{
            color: palette.text.secondary,
          }}
        >
          {t("signInDescription")}
        </Typography>
      </Stack>

      <RHFForm<SchemaValues>
        id={id}
        form={form}
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <RHFTextField<SchemaValues>
          name="login"
          label={t("formSchema.login.label")}
          placeholder={t("formSchema.login.label")}
        />
        <RHFTextFieldPassword<SchemaValues>
          name="password"
          label={t("formSchema.password.label")}
          placeholder={t("formSchema.password.label")}
        />

        {isError && (
          <Alert
            severity="error"
            sx={{
              width: "100%",
            }}
          >
            {error.message}
          </Alert>
        )}

        <Typography
          variant="body2"
          sx={{
            textAlign: "end",
          }}
        >
          <Link
            component={RouterLink}
            to={ROUTER_PATHS.FULL.SIGN_UP}
            underline="always"
          >
            {t("signUp")}
          </Link>
        </Typography>
      </RHFForm>

      <LoadingButton
        fullWidth
        form={id}
        type="submit"
        loading={isLoading}
        variant="outlined"
        size="large"
      >
        {t("signIn")}
      </LoadingButton>
    </Stack>
  );
};
