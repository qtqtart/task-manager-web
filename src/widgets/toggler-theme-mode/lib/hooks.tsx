import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { PaletteMode } from "@mui/material";

type Option = {
  icon: JSX.Element;
  value: PaletteMode;
};

export const useOptions = () => {
  const options: Option[] = [
    {
      icon: <LightModeIcon />,
      value: "light",
    },
    {
      icon: <DarkModeIcon />,
      value: "dark",
    },
  ];

  return { options };
};
