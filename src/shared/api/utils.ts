import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
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

export const providesList = <
  R extends { id: number | string }[],
  T extends string,
>(
  resultsWithIds: R | undefined,
  tagType: T,
) => {
  return resultsWithIds
    ? [
        { id: "LIST", type: tagType },
        ...resultsWithIds.map(({ id }) => ({ id, type: tagType })),
      ]
    : [{ id: "LIST", type: tagType }];
};
