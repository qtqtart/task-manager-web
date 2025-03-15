import { setAccessToken } from "@features/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Alert, Link, Stack, Typography, useTheme } from "@mui/material";
import { ROUTER_PATHS } from "@shared/router";
import { RHFForm } from "@shared/ui/rhf-form";
import { RHFTextField, RHFTextFieldPassword } from "@shared/ui/rhf-textfield";
import { RHFUploadAvatar } from "@shared/ui/rhf-upload-avatar";
import { FC, useCallback, useEffect, useId } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

import { useSignUpMutation } from "./api";
import { useFormDefaultValues } from "./lib/hooks";
import {
  SignUpSchema as Schema,
  SignUpSchemaValues as SchemaValues,
} from "./models/schema";

export const SignUpForm: FC = () => {
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

  const [signUp, { isLoading, isSuccess, isError, error }] =
    useSignUpMutation();
  const handleSubmit = useCallback(
    async (values: SchemaValues) => {
      const { accessToken } = await signUp(values).unwrap();
      setAccessToken(accessToken);
    },
    [signUp],
  );

  useEffect(() => {
    if (!isSuccess) return;
    form.reset(defaultValues);
    navigate(ROUTER_PATHS.FULL.ANALYTICS);
  }, [isSuccess, form, defaultValues, navigate]);

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
        <Typography variant="subtitle1">{t("signUp")}</Typography>
        <Typography
          variant="body2"
          sx={{
            color: palette.text.secondary,
          }}
        >
          {t("signUpDescription")}
        </Typography>
      </Stack>

      <RHFForm<SchemaValues>
        id={id}
        form={form}
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <Stack
          sx={{
            flexDirection: "row",
            gap: "16px",
          }}
        >
          <Stack
            sx={{
              flexDirection: "column",
              gap: "16px",
              width: "100%",
            }}
          >
            <RHFTextField<SchemaValues>
              name="firstName"
              label={t("formSchema.firstName.label")}
              placeholder={t("formSchema.firstName.label")}
            />

            <RHFTextField<SchemaValues>
              name="lastName"
              label={t("formSchema.lastName.label")}
              placeholder={t("formSchema.lastName.label")}
            />
          </Stack>

          <RHFUploadAvatar<SchemaValues> name="file" />
        </Stack>

        <RHFTextField<SchemaValues>
          name="username"
          label={t("formSchema.username.label")}
          placeholder={t("formSchema.username.label")}
        />
        <RHFTextField<SchemaValues>
          name="email"
          label={t("formSchema.email.label")}
          placeholder={t("formSchema.email.label")}
        />
        <RHFTextFieldPassword<SchemaValues>
          name="password"
          label={t("formSchema.password.label")}
          placeholder={t("formSchema.password.label")}
        />
        <RHFTextFieldPassword<SchemaValues>
          name="passwordConfirm"
          label={t("formSchema.passwordConfirm.label")}
          placeholder={t("formSchema.passwordConfirm.label")}
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
            to={ROUTER_PATHS.FULL.SIGN_IN}
            underline="always"
          >
            {t("signIn")}
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
        {t("signUp")}
      </LoadingButton>
    </Stack>
  );
};
