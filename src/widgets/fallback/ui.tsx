import { Stack, Typography } from "@mui/material";
import { FC } from "react";

export const Fallback: FC = () => {
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Typography variant="body2">{"oops, something went wrong"}</Typography>
    </Stack>
  );
};
