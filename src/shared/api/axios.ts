import { ROUTER_PATHS } from "@app/router";
import { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import i18next from "i18next";

type ErrorMessage = {
  message: string;
};

export const axiosBaseQuery = (
  axiosInstance: AxiosInstance,
): BaseQueryFn<
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
> => {
  return async (config) => {
    try {
      const { data } = await axiosInstance.request(config);
      return { data };
    } catch (error) {
      const axiosError = error as AxiosError<ErrorMessage>;
      const message =
        axiosError.response?.data?.message ||
        axiosError.message ||
        i18next.t("unknown_error");

      return {
        error: {
          message,
        },
      };
    }
  };
};

export const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.VITE_BASE_API_URL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!axios.isAxiosError(error)) return;

    if (error.response?.status === 401) {
      window.location.href = ROUTER_PATHS.FULL.SIGN_IN;
    }
    if (error.response?.status === 403) {
      window.location.href = ROUTER_PATHS.FULL.FORBIDDEN;
    }
    if (error.response?.status === 404) {
      window.location.href = ROUTER_PATHS.FULL.NOT_FOUND;
    }
  },
);
