import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosError, AxiosRequestConfig } from "axios";

import { ErrorMessage } from "../models/types";
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
    ErrorMessage
  > =>
  async (config) => {
    try {
      const { data } = await axiosInstance(config);
      return { data };
    } catch (error) {
      const message =
        (error as AxiosError<ErrorMessage>).response?.data.message || "";

      return {
        error: {
          message,
        },
      };
    }
  };
