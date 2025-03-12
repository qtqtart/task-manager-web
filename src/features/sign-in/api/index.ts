import { baseApi } from "@shared/api";

import { SignInRequest, SignInResponse } from "../models/types";

export const { useSignInMutation } = baseApi.injectEndpoints({
  endpoints: ({ mutation }) => ({
    signIn: mutation<SignInResponse, SignInRequest>({
      query: (data) => ({
        method: "POST",
        url: "auth/sign-in",
        data,
      }),
    }),
  }),
});
