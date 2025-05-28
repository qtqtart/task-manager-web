import { useRootDispatch, useRootSelector } from "@app/store";
import { useCallback } from "react";

import { projectFiltersSlice, ProjectFiltersState } from "./slice";

export const useProjectFiltersState = () => {
  const projectFilters = useRootSelector((s) => s.projectFiltersState);

  const d = useRootDispatch();
  const set = useCallback(
    (payload: Partial<ProjectFiltersState>) => {
      d(projectFiltersSlice.actions.set(payload));
    },
    [d],
  );

  return {
    ...projectFilters,
    set,
  };
};
