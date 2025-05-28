import { baseApi } from "@shared/api";
import { TAG_TYPES } from "@shared/api/consts";
import { providesList } from "@shared/api/utils";

import { ProjectModel } from "./types";

export const { useGetProjectByIdQuery, useGetProjectsQuery } =
  baseApi.injectEndpoints({
    endpoints: ({ query }) => ({
      getProjectById: query<ProjectModel, { id: string }>({
        query: ({ id }) => ({
          method: "GET",
          url: `/project/${id}`,
        }),
      }),
      getProjects: query<
        ProjectModel[],
        {
          searchTerms?: string;
          isArchived?: boolean;
        }
      >({
        query: (params) => ({
          method: "GET",
          url: "/project",
          params,
        }),
        providesTags: (r) => providesList(r, TAG_TYPES.PROJECTS),
      }),
    }),
  });
