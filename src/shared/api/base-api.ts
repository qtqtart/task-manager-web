import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery, axiosInstance } from "./axios";
import { TAG_TYPES } from "./consts";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery(axiosInstance),
  tagTypes: [...Object.values(TAG_TYPES)],
  endpoints: () => ({}),
});
