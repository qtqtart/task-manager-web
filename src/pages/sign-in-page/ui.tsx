import { SignInForm } from "@features/sign-in";
import { Paper, Stack } from "@mui/material";
import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const SignInPage: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("signIn")}</title>
      </Helmet>
      <Paper
        variant="outlined"
        component={Stack}
        sx={{
          flexDirection: "column",
          padding: "16px",
          width: "100%",
        }}
      >
        <SignInForm />
      </Paper>
    </>
  );
};

export default SignInPage;
