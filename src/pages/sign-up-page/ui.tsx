import { SignUpForm } from "@features/sign-up";
import { Paper, Stack } from "@mui/material";
import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const SignUpPage: FC = () => {
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
        <SignUpForm />
      </Paper>
    </>
  );
};

export default SignUpPage;
