import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

import { TAG_TYPES } from "./consts";
import { axiosBaseQuery } from "./utils";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery(axiosInstance),
  tagTypes: [...Object.values(TAG_TYPES)],
  endpoints: () => ({}),
});
