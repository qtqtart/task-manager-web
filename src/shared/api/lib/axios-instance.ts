import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "@features/auth/lib/utils";
import { ROUTER_PATHS } from "@shared/router";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const status = error.response?.status;
    const request = error.config as InternalAxiosRequestConfig;

    if (status === 401) {
      try {
        const response = await axios.post(`${baseURL}/auth/refresh`);
        const accessToken = response.data?.accessToken;
        request.headers.Authorization = `Bearer ${accessToken}`;

        setAccessToken(accessToken);
        return axiosInstance(request);
      } catch (error) {
        removeAccessToken();
        return Promise.reject(error);
      }
    } else if (status === 403) {
      window.location.href = ROUTER_PATHS.FULL.FORBIDDEN;
      return;
    } else if (status === 404) {
      window.location.href = ROUTER_PATHS.FULL.NOT_FOUND;
      return;
    }

    return Promise.reject(error);
  },
);
