import { baseApi } from "@shared/api";

import { UserModel } from "./types";

export const { useGetCurrentUserQuery } = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getCurrentUser: query<UserModel, void>({
      query: () => ({
        method: "GET",
        url: "/account",
      }),
    }),
  }),
});
