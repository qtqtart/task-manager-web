import { baseApi } from "@shared/api";

export const { useUploadMutation } = baseApi.injectEndpoints({
  endpoints: ({ mutation }) => ({
    upload: mutation<
      string,
      {
        file: File;
      }
    >({
      query: ({ file }) => {
        const data = new FormData();
        data.append("file", file);

        return {
          method: "POST",
          url: "/upload",
          data,
        };
      },
    }),
  }),
});
