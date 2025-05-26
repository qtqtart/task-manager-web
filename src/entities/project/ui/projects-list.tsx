import { useProjectFiltersStore } from "@features/project-filters";
import { useGetAllProjectsQuery } from "@generated";
import { Skeleton, Stack, SxProps, Theme } from "@mui/material";
import { Scrollbar } from "@shared/ui/scrollbar";
import { ProjectsStartState } from "@widgets/start-states";
import { FC } from "react";

import { ProjectItem } from "./project-item";

export const ProjectsList: FC = () => {
  const projectFilters = useProjectFiltersStore();
  const projectsState = useGetAllProjectsQuery({
    fetchPolicy: "network-only",
    variables: {
      filters: {
        isArchived: projectFilters.isArchived,
        searchTerms: projectFilters.searchTerms,
      },
    },
  });
  const projects = projectsState.data?.getAllProjects ?? [];

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
      {projectsState.loading ? (
        <Stack sx={sx}>
          {Array.from({ length: 6 }, (_, i) => (
            <Skeleton key={i} />
          ))}
        </Stack>
      ) : (
        <>
          {projects.length === 0 ? (
            <ProjectsStartState />
          ) : (
            <Stack sx={sx}>
              {projects.map((project) => (
                <ProjectItem key={project.id} project={project} />
              ))}
            </Stack>
          )}
        </>
      )}
    </Scrollbar>
  );
};
