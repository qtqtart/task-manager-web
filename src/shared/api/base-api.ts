import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { CONFIG } from "@shared/config";
import { ClientError, GraphQLClient } from "graphql-request";
import { t } from "i18next";

export const client = new GraphQLClient(CONFIG.BASE_API_URL, {
  headers: {
    "apollo-require-preflight": "true",
  },
});
export const baseApi = createApi({
  baseQuery: graphqlRequestBaseQuery<ClientError>({
    client,
    customErrors: (error) => ({
      ...error,
      message: error.response.errors![0].message || t("unknownError"),
    }),
  }),
  endpoints: () => ({}),
  refetchOnMountOrArgChange: true,
});
