import { baseApi } from "@shared/api";

interface SignInRequest {
  login: string;
  password: string;
}

export const { useSignInMutation } = baseApi.injectEndpoints({
  endpoints: ({ mutation }) => ({
    signIn: mutation<boolean, SignInRequest>({
      query: (data) => ({
        method: "POST",
        url: "/auth/sign-in",
        data,
      }),
    }),
  }),
});
