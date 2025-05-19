import { Paper, Stack } from "@mui/material";
import { useResponsive } from "@shared/hooks/use-responsive";
import { HeaderNavigation } from "@widgets/header-navigation";
import { FC } from "react";

export const Header: FC = () => {
  const isOnlyXs = useResponsive("only", "xs");

  return (
    <Paper
      sx={{
        position: "sticky",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingX: 1,
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
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              gap: 4,
            }}
          >
            <HeaderNavigation />
          </Stack>
        </Stack>
      )}
    </Paper>
  );
};
