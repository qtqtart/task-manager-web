import { Paper, Stack } from "@mui/material";
import { AccountPopover } from "@widgets/account-popover";
import { HeaderNavigation } from "@widgets/header-navigation";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <Paper
      sx={{
        position: "sticky",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingX: 1,
        height: "80px",
      }}
    >
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

        <AccountPopover />
      </Stack>
    </Paper>
  );
};
