import { Button, ButtonGroup } from "@mui/material";
import { LANGUAGES_OPTIONS } from "@shared/i18n";
import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";

export const TogglerLanguage: FC = () => {
  const { i18n } = useTranslation();
  const handleClick = useCallback(
    (value: string) => {
      return () => {
        i18n.changeLanguage(value);
      };
    },
    [i18n],
  );

  return (
    <ButtonGroup fullWidth variant="outlined">
      {Object.values(LANGUAGES_OPTIONS).map(({ label, value }) => (
        <Button
          key={value}
          variant={i18n.language === value ? "contained" : "outlined"}
          onClick={handleClick(value)}
        >
          {label}
        </Button>
      ))}
    </ButtonGroup>
  );
};
