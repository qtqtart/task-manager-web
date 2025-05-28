import { useGetCurrentUserQuery } from "@entities/user";
import { SignOutButton } from "@features/auth/sign-out";
import {
  Avatar,
  Card,
  Popover,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { usePopover } from "@shared/hooks/use-popover";
import { ToggleThemeMode } from "@widgets/toggle-theme-mode";
import { FC } from "react";

export const AccountPopover: FC = () => {
  const { data: user, isLoading } = useGetCurrentUserQuery();

  const popover = usePopover();

  return (
    <>
      {isLoading ? (
        <Skeleton
          sx={{
            width: "40px",
            height: "40px",
          }}
        />
      ) : (
        <Avatar
          src={user?.imageUrl ?? undefined}
          alt={user?.username}
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

      <Popover
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
          paper: {
            sx: {
              width: 320,
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
      </Popover>
    </>
  );
};
