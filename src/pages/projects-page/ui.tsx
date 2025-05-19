import AddIcon from "@mui/icons-material/Add";
import { Button, Paper, Stack } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

const ProjectsPage: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Stack
        sx={{
          flexDirection: "column",
          gap: "8px",
          height: "100%",
        }}
      >
        <Paper
          variant="outlined"
          component={Stack}
          sx={{
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "space-between",
            gap: "8px",
            padding: "8px",
            width: "100%",
          }}
        >
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              gap: "8px",
            }}
          ></Stack>

          <Button variant="contained" startIcon={<AddIcon />}>
            {t("project")}
          </Button>
        </Paper>
      </Stack>
    </>
  );
};

export default ProjectsPage;
