import { useMeQuery } from "@features/me";
import { SignOutButton } from "@features/sign-out";
import { Avatar, Divider, Popover, Skeleton } from "@mui/material";
import { usePopover } from "@shared/hooks/use-popover";
import { TogglerLanguage } from "@widgets/toggler-language";
import { FC } from "react";

export const AvatarPopover: FC = () => {
  const { data, isLoading } = useMeQuery();
  const { anchorEl, handleClosePopover, handleOpenPopover, isOpenPopover } =
    usePopover();

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
        <TogglerLanguage />

        <Divider />
        <SignOutButton />
      </Popover>
    </>
  ) : (
    <Avatar />
  );
};
