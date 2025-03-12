import { removeAccessToken, setAccessToken } from "@shared/lib/access-token";
import { ROUTER_PATHS } from "@shared/router/consts/router-paths";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Accept: "application/json",
  },
  withCredentials: true,
  timeout: 60000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const status = error.response?.status;
    const request = error.config as InternalAxiosRequestConfig;

    if (status === 404) {
      window.location.href = ROUTER_PATHS.FULL.NOT_FOUND;
      return;
    }
    if (status === 403) {
      window.location.href = ROUTER_PATHS.FULL.FORBIDDEN;
      return;
    }
    if (status === 401 && !request._retry) {
      request._retry = true;

      try {
        const response = await axiosInstance.post("/auth/refresh");
        const accessToken = response.data?.accessToken;
        request.headers.Authorization = `Bearer ${accessToken}`;

        setAccessToken(accessToken);
        return axiosInstance(request);
      } catch (error) {
        removeAccessToken();
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);
