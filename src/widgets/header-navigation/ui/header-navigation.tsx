import { IconButton, Stack, Tooltip } from "@mui/material";
import { FC, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { HEADER_NAVIGATION_OPTIONS } from "../consts";

export const HeaderNavigation: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = useCallback(
    (link: string) => {
      navigate(link);
    },
    [navigate],
  );

  return (
    <Stack
      sx={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
      }}
    >
      {HEADER_NAVIGATION_OPTIONS.map(({ icon, label, link }) => (
        <Tooltip key={link} title={label}>
          <IconButton
            color={pathname === link ? "primary" : "inherit"}
            onClick={() => handleClick(link)}
          >
            {icon}
          </IconButton>
        </Tooltip>
      ))}
    </Stack>
  );
};
