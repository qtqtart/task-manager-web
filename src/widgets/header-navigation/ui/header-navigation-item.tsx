import { IconButton, Tooltip } from "@mui/material";
import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { Option } from "../lib/hooks";

type Props = {
  option: Option;
};

const HeaderNavigationItem_: FC<Props> = ({ option }) => {
  const navigate = useNavigate();
  const onClick = useCallback(() => {
    navigate(option.link);
  }, [navigate, option.link]);

  return (
    <Tooltip title={option.label}>
      <IconButton onClick={onClick}>{option.icon}</IconButton>
    </Tooltip>
  );
};

export const HeaderNavigationItem = memo(HeaderNavigationItem_);
