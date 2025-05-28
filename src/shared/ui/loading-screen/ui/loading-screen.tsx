import { LinearProgress, Portal, Stack, SxProps, Theme } from "@mui/material";
import { FC, Fragment } from "react";

export type Props = React.ComponentProps<"div"> & {
  portal?: boolean;
  sx?: SxProps<Theme>;
};

export const LoadingScreen: FC<Props> = ({ portal, sx, ...props }) => {
  const PortalWrapper = portal ? Portal : Fragment;
  return (
    <PortalWrapper>
      <Stack
        sx={(theme) => ({
          flexGrow: 1,
          width: "100%",
          minHeight: "100%",
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: theme.spacing(5),
          paddingRight: theme.spacing(5),
          ...(sx && {
            sx,
          }),
        })}
        {...props}
      >
        <LinearProgress
          color="inherit"
          sx={{
            width: 1,
            maxWidth: 360,
          }}
        />
      </Stack>
    </PortalWrapper>
  );
};
