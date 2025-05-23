import { useCurrentUser } from "@features/auth/is-auth";
import { SignOutButton } from "@features/auth/sign-out";
import { Avatar, Card, Skeleton, Stack, Typography } from "@mui/material";
import { usePopover } from "@shared/hooks/use-popover";
import { CustomPopover } from "@shared/ui/custom-popover";
import { ToggleThemeMode } from "@widgets/toggle-theme-mode";
import { FC } from "react";

export const AccountPopover: FC = () => {
  const popover = usePopover();

  const userState = useCurrentUser();
  const user = userState.data?.getCurrentUser;

  return (
    <>
      {userState.loading ? (
        <Skeleton
          sx={{
            width: "40px",
            height: "40px",
          }}
        />
      ) : (
        <Avatar
          src={user?.imageUrl ?? undefined}
          onClick={popover.onOpen}
          sx={(theme) => ({
            width: "40px",
            height: "40px",
            border: `1px solid ${theme.vars.palette.divider}`,
          })}
        >
          {user?.username[0].toUpperCase()}
        </Avatar>
      )}

      <CustomPopover
        anchorEl={popover.anchorEl}
        open={popover.open}
        onClose={popover.onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          backdrop: { invisible: true },
          paper: {
            sx: {
              width: 320,
              p: 1,
            },
          },
        }}
      >
        <Stack
          sx={{
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Card
            sx={{
              p: 1,
            }}
          >
            <Typography variant="subtitle1">{user?.username}</Typography>
            <Typography variant="subtitle1">{user?.email}</Typography>
          </Card>

          <ToggleThemeMode />
          <SignOutButton />
        </Stack>
      </CustomPopover>
    </>
  );
};
