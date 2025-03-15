import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { LANGUAGES_OPTIONS } from "@shared/i18n";
import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";

export const TogglerLanguage: FC = () => {
  const { i18n } = useTranslation();
  const handleChange = useCallback(
    (_: unknown, value: string) => {
      i18n.changeLanguage(value);
    },
    [i18n],
  );

  return (
    <ToggleButtonGroup
      fullWidth
      exclusive
      value={i18n.language}
      onChange={handleChange}
    >
      {Object.values(LANGUAGES_OPTIONS).map(({ label, value }) => (
        <ToggleButton key={value} value={value}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
