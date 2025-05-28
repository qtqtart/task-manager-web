import { ProjectModel } from "@entities/project/types";
import { baseApi } from "@shared/api";
import { TAG_TYPES } from "@shared/api/consts";

interface CreateProjectRequest {
  title: string;
  description?: string;
  imageUrl?: string | null;
  memberIds: string[];
}

export const { useCreateProjectMutation } = baseApi.injectEndpoints({
  endpoints: ({ mutation }) => ({
    createProject: mutation<ProjectModel, CreateProjectRequest>({
      query: (data) => ({
        method: "POST",
        url: "/project",
        data,
      }),
      invalidatesTags: [TAG_TYPES.PROJECTS],
    }),
  }),
});
