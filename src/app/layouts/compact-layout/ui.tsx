import { Container, Stack } from "@mui/material";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const CompactLayout: FC = () => {
  return (
    <Stack
      sx={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Container maxWidth="xs">
        <Outlet />
      </Container>
    </Stack>
  );
};

export default CompactLayout;
