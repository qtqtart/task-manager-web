import { ProjectsList } from "@entities/project";
import { ProjectFiltersBar } from "@features/project/project-filters-state";
import Stack from "@mui/material/Stack";
import { FC } from "react";

const ProjectsPage: FC = () => {
  return (
    <>
      <Stack
        sx={{
          flexDirection: "column",
          gap: 1,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <ProjectFiltersBar />
        <ProjectsList />
      </Stack>
    </>
  );
};

export default ProjectsPage;
