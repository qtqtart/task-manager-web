import { UserModel } from "@entities/user";
import { baseApi } from "@shared/api";

export const { useSignUpMutation } = baseApi.injectEndpoints({
  endpoints: ({ mutation }) => ({
    signUp: mutation<boolean, Omit<UserModel, "id">>({
      query: (data) => ({
        method: "POST",
        url: "/auth/sign-up",
        data,
      }),
    }),
  }),
});
