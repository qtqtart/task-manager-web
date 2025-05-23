import { useProjectFiltersStore } from "@features/project-filters";
import { useGetAllProjectsQuery } from "@generated";
import { Skeleton } from "@mui/material";
import { Scrollbar } from "@shared/ui/scrollbar";
import { ProjectsStartState } from "@widgets/start-states";
import { FC } from "react";

import { ProjectItem } from "./project-item";

export const ProjectsList: FC = () => {
  const projectFilters = useProjectFiltersStore();
  const projectsState = useGetAllProjectsQuery({
    variables: {
      filters: projectFilters,
    },
  });
  const projects = projectsState.data?.getAllProjects ?? [];

  if (projectsState.loading)
    return (
      <Scrollbar>
        {Array.from({ length: 6 }, (_, i) => (
          <Skeleton key={i} />
        ))}
      </Scrollbar>
    );
  return (
    <>
      {projects.length === 0 ? (
        <ProjectsStartState />
      ) : (
        <Scrollbar>
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </Scrollbar>
      )}
    </>
  );
};
