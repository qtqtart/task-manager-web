import { IconButton, Stack, Tooltip } from "@mui/material";
import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useOptions } from "./lib/hooks";

export const HeaderNavigation: FC = () => {
  const { options } = useOptions();
  const navigate = useNavigate();
  const onClick = useCallback(
    (link: string) => {
      return () => {
        navigate(link);
      };
    },
    [navigate],
  );

  return (
    <Stack
      sx={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
      }}
    >
      {options.map(({ icon, label, link }) => (
        <Tooltip key={link} title={label}>
          <IconButton onClick={onClick(link)}>{icon}</IconButton>
        </Tooltip>
      ))}
    </Stack>
  );
};
