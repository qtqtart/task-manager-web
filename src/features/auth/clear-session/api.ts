import { baseApi } from "@shared/api";

export const { useClearSessionMutation } = baseApi.injectEndpoints({
  endpoints: ({ mutation }) => ({
    clearSession: mutation<void, void>({
      query: () => ({
        method: "DELETE",
        url: "/session",
      }),
    }),
  }),
});
