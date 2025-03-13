import { UserModel } from "@entities/user";
import { baseApi } from "@shared/api";

export const { useMeQuery } = baseApi.injectEndpoints({
  endpoints: ({ query }) => ({
    me: query<UserModel, void>({
      query: () => ({
        method: "GET",
        url: "me",
      }),
    }),
  }),
});
