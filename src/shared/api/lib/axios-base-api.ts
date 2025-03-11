import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosError, AxiosRequestConfig } from "axios";

import { axiosInstance } from "./axios-instance";

export const axiosBaseQuery =
  (): BaseQueryFn<
    {
      data?: AxiosRequestConfig["data"];
      headers?: AxiosRequestConfig["headers"];
      method?: AxiosRequestConfig["method"];
      params?: AxiosRequestConfig["params"];
      responseType?: AxiosRequestConfig["responseType"];
      url: string;
    },
    unknown,
    unknown
  > =>
  async (config) => {
    try {
      const { data } = await axiosInstance(config);
      return data;
    } catch (axiosError) {
      const error = axiosError as AxiosError;

      return {
        error: error.response?.data,
        status: error.response?.status,
      };
    }
  };
