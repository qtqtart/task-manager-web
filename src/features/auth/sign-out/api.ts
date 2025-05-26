import { baseApi } from "@shared/api";

export const { useSignOutMutation } = baseApi.injectEndpoints({
  endpoints: ({ mutation }) => ({
    signOut: mutation<boolean, void>({
      query: () => ({
        method: "POST",
        url: "/auth/sign-out",
      }),
    }),
  }),
});
