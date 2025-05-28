import { baseApi } from "@shared/api";

import { UserModel } from "./types";

export const {
  useGetCurrentUserQuery,
  useLazyGetAllUsersQuery,
  useGetAllUsersQuery,
} = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getCurrentUser: query<UserModel, void>({
      query: () => ({
        method: "GET",
        url: "/account",
      }),
    }),
    getAllUsers: query<UserModel[], void>({
      query: () => ({
        method: "GET",
        url: "/user",
      }),
    }),
  }),
});
