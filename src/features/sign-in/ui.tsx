import { zodResolver } from "@hookform/resolvers/zod";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { LoadingButton } from "@mui/lab";
import {
  Alert,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import { RHFForm } from "@shared/ui/rhf-form";
import { RHFTextField } from "@shared/ui/rhf-textfield";
import { FC, useCallback, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useSignInMutation } from "./api";
import { useFormDefaultValues } from "./lib/hooks";
import { SignInSchema, SignInSchemaValues } from "./models/schema";

export const SignInForm: FC = () => {
  const id = useId();
  const { t } = useTranslation();
  const { defaultValues } = useFormDefaultValues();
  const form = useForm({
    mode: "onSubmit",
    resolver: zodResolver(SignInSchema),
    defaultValues,
  });

  const [signIn, { isLoading, isSuccess, isError, error }] =
    useSignInMutation();
  const handleSubmit = useCallback(
    (values: SignInSchemaValues) => {
      signIn(values);
      if (isSuccess) form.reset(defaultValues);
    },
    [signIn, isSuccess, form, defaultValues],
  );

  const [showPassword, setShowPassword] = useState(false);
  const onShowPassword = useCallback(() => {
    setShowPassword(true);
  }, []);
  const onHidePassword = useCallback(() => {
    setShowPassword(false);
  }, []);

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
          <RHFTextField name="login" placeholder={t("login")} />
          <RHFTextField
            name="password"
            placeholder={t("password")}
            type={showPassword ? "text" : "password"}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    {showPassword ? (
                      <IconButton onClick={onHidePassword}>
                        <VisibilityIcon />
                      </IconButton>
                    ) : (
                      <IconButton onClick={onShowPassword}>
                        <VisibilityOffIcon />
                      </IconButton>
                    )}
                  </InputAdornment>
                ),
              },
            }}
          />

          {isError && <Alert severity="error">{JSON.stringify(error)}</Alert>}
        </RHFForm>

        <LoadingButton
          fullWidth
          type="submit"
          form={id}
          loading={isLoading}
          variant="outlined"
        >
          {t("sign-in")}
        </LoadingButton>
      </Stack>
    </>
  );
};
