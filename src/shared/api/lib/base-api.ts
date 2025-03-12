import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "./axios-base-query";
import { TAG_TYPES } from "./consts";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(),
  tagTypes: [...Object.values(TAG_TYPES)],
  endpoints: () => ({}),
});
