import { Card, Typography } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const TasksStartState: FC = () => {
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="subtitle1">{t("tasksNotFound")}</Typography>
    </Card>
  );
};
