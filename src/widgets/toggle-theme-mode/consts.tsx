import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { SupportedColorScheme } from "@mui/material";
import { t } from "i18next";
import { ReactElement } from "react";

export const THEME_MODE_OPTIONS: {
  label: string;
  value: SupportedColorScheme;
  icon: ReactElement;
}[] = [
  {
    label: t("light"),
    value: "light",
    icon: <LightModeIcon />,
  },
  {
    label: t("dark"),
    value: "dark",
    icon: <DarkModeIcon />,
  },
];
