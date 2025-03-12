import { Container } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: FC = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "16px",
        paddingBottom: "16px",
        height: "100vh",
      }}
    >
      <Outlet />
    </Container>
  );
};

export default AuthLayout;
