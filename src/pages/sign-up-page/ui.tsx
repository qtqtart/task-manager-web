import { SignUpForm } from "@features/auth/sign-up";
import { Paper, Stack } from "@mui/material";
import { FC } from "react";

const SignUpPage: FC = () => {
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
        <SignUpForm />
      </Paper>
    </>
  );
};

export default SignUpPage;
