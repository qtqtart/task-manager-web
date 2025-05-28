import { ProjectModel } from "@entities/project/types";
import { baseApi } from "@shared/api";
import { TAG_TYPES } from "@shared/api/consts";

interface UpdateProjectRequest {
  title?: string;
  description?: string;
  imageUrl?: string;
  memberIds?: string[];
  isArchived?: boolean;
}

export const { useUpdateProjectMutation } = baseApi.injectEndpoints({
  endpoints: ({ mutation }) => ({
    updateProject: mutation<
      ProjectModel,
      { id: string; data: UpdateProjectRequest }
    >({
      query: ({ id, data }) => ({
        method: "PATCH",
        url: `/project/${id}`,
        data,
      }),
      invalidatesTags: [TAG_TYPES.PROJECTS],
    }),
  }),
});
