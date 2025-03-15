import { useMeQuery } from "@features/me";
import { SignOutButton } from "@features/sign-out";
import {
  Avatar,
  Divider,
  Popover,
  Skeleton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { usePopover } from "@shared/hooks/use-popover";
import { TogglerLanguage } from "@widgets/toggler-language";
import { TogglerThemeMode } from "@widgets/toggler-theme-mode";
import { FC } from "react";

export const AvatarPopover: FC = () => {
  const { palette } = useTheme();
  const { anchorEl, handleClosePopover, handleOpenPopover, isOpenPopover } =
    usePopover();
  const { data, isLoading } = useMeQuery();

  if (isLoading)
    return (
      <Skeleton
        sx={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
        }}
      />
    );

  return data ? (
    <>
      <Avatar
        alt={data.username}
        src={data.imageUrl ?? undefined}
        onClick={isOpenPopover ? handleClosePopover : handleOpenPopover}
      >
        {data.imageUrl ?? data.username.at(0)}
      </Avatar>

      <Popover
        open={isOpenPopover}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
        transformOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
        slotProps={{
          paper: {
            sx: {
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              padding: "8px",
              width: {
                xs: "100%",
                sm: "212px",
              },
            },
          },
        }}
      >
        <Stack
          sx={{
            width: "100%",
            flexDirection: "column",
          }}
        >
          <Typography
            noWrap
            variant="body1"
            sx={{
              fontWeight: "500",
              color: palette.text.secondary,
            }}
          >
            {data.username}
          </Typography>
          <Typography
            noWrap
            variant="body1"
            sx={{
              fontWeight: "500",
              color: palette.text.secondary,
            }}
          >
            {data.email}
          </Typography>
        </Stack>

        <Divider />
        <TogglerLanguage />
        <TogglerThemeMode />
        <Divider />
        <SignOutButton />
      </Popover>
    </>
  ) : (
    <Avatar />
  );
};
