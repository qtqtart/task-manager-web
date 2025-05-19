import { Stack } from "@mui/material";
import { Header } from "@widgets/header";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const DashboardLayout: FC = () => {
  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Header />

      <Stack
        component="main"
        sx={{
          flexGrow: 1,
          flexDirection: "column",
          padding: "8px",
          width: "100%",
        }}
      >
        <Stack
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          <Outlet />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DashboardLayout;
