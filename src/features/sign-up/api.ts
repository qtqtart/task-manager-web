import { baseApi } from "@shared/api";

import { SignUpRequest, SignUpResponse } from "./models/types";

export const { useSignUpMutation } = baseApi.injectEndpoints({
  endpoints: ({ mutation }) => ({
    signUp: mutation<SignUpResponse, SignUpRequest>({
      query: (data) => {
        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("email", data.email);
        formData.append("firstName", data.firstName);
        formData.append("lastName", data.lastName);
        formData.append("password", data.password);
        formData.append("passwordConfirm", data.passwordConfirm);
        if (data.file) formData.append("file", data.file);

        return {
          method: "POST",
          url: "/auth/sign-up",
          data: formData,
        };
      },
    }),
  }),
});
