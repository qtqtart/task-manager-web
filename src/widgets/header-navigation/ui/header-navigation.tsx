import { Stack } from "@mui/material";
import { FC } from "react";

import { useOptions } from "../lib/hooks";
import { HeaderNavigationItem } from "./header-navigation-item";

export const HeaderNavigation: FC = () => {
  const { options } = useOptions();

  return (
    <Stack
      sx={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
      }}
    >
      {options.map((option) => (
        <HeaderNavigationItem key={option.link} option={option} />
      ))}
    </Stack>
  );
};
