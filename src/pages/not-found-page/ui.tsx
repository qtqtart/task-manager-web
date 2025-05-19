import { ROUTER_PATHS } from "@app/router";
import { Button, Stack, Typography } from "@mui/material";
import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NotFoundPage: FC = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(ROUTER_PATHS.FULL.ANALYTICS);
  }, [navigate]);

  return (
    <Stack
      sx={{
        flexDirection: "column",
        gap: "16px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="subtitle1">{t("pageNotFound")}</Typography>
      <Typography variant="body2">{t("pageNotFoundDescription")}</Typography>
      <Button variant="outlined" onClick={handleClick}>
        {t("pageNotFoundButton")}
      </Button>
    </Stack>
  );
};

export default NotFoundPage;
