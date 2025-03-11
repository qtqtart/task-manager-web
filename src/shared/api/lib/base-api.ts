import { createApi } from "@reduxjs/toolkit/query/react";

import { TAG_TYPES } from "../consts";
import { axiosBaseQuery } from "./axios-base-api";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(),
  tagTypes: [...Object.values(TAG_TYPES)],
  endpoints: () => ({}),
});
