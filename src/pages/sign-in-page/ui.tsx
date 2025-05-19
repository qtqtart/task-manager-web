import { SignInForm } from "@features/auth/sign-in";
import { Paper, Stack } from "@mui/material";
import { FC } from "react";

const SignInPage: FC = () => {
  return (
    <>
      <Paper
        variant="outlined"
        component={Stack}
        sx={{
          flexDirection: "column",
          p: 2,
          width: "100%",
        }}
      >
        <SignInForm />
      </Paper>
    </>
  );
};

export default SignInPage;
