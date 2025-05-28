import { useProjectFiltersState } from "@features/project/project-filters-state";
import { Skeleton, Stack, SxProps, Theme } from "@mui/material";
import { Scrollbar } from "@shared/ui/scrollbar";
import { ProjectsStartState } from "@widgets/start-states";
import { FC } from "react";

import { useGetProjectsQuery } from "../api";
import { ProjectItem } from "./project-item";

export const ProjectsList: FC = () => {
  const filters = useProjectFiltersState();
  const projects = useGetProjectsQuery({
    searchTerms: filters.searchTerms,
    isArchived: filters.isArchived,
  });

  const sx: SxProps<Theme> = {
    display: "grid",
    gridTemplateColumns: {
      md: "repeat(3, 1fr)",
      sm: "repeat(2, 1fr)",
      xs: "repeat(1, 1fr)",
    },
    gap: 1,
  };

  return (
    <Scrollbar
      sx={{
        maxHeight: "calc(100vh - 180px)",
      }}
    >
      {projects.isLoading ? (
        <Stack sx={sx}>
          {Array.from({ length: 6 }, (_, i) => (
            <Skeleton key={i} />
          ))}
        </Stack>
      ) : (
        <>
          {projects.data?.length === 0 ? (
            <ProjectsStartState />
          ) : (
            <Stack sx={sx}>
              {projects.data?.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </Stack>
          )}
        </>
      )}
    </Scrollbar>
  );
};
