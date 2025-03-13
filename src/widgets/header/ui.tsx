import { AppBar, Avatar, Stack } from "@mui/material";
import { useResponsive } from "@shared/hooks/use-responsive";
import { Logotype } from "@shared/ui/logotype";
import { HeaderNavigation } from "@widgets/header-navigation";
import { FC } from "react";

export const Header: FC = () => {
  const isOnlyXs = useResponsive("only", "xs");

  return (
    <AppBar
      position="sticky"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingX: "8px",
        height: {
          sm: "80px",
          xs: "136px",
        },
      }}
    >
      {isOnlyXs ? (
        <>{"soon"}</>
      ) : (
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Logotype />

          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              gap: "32px",
            }}
          >
            <HeaderNavigation />
            <Avatar>{"user"}</Avatar>
          </Stack>
        </Stack>
      )}
    </AppBar>
  );
};
