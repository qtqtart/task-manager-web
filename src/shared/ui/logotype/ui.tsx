import { IconButton, useTheme } from "@mui/material";
import LogotypeIcon from "@shared/assets/logotype.svg?react";
import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const Logotype: FC = () => {
  const { palette } = useTheme();
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <IconButton onClick={onClick}>
      <LogotypeIcon width={24} height={24} fill={palette.text.primary} />
    </IconButton>
  );
};
