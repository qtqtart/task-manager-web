import { removeAccessToken, setAccessToken } from "@shared/lib/access-token";
import { ROUTER_PATHS } from "@shared/router/consts/router-paths";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const status = error.response?.status;

    switch (status) {
      case 404:
        window.location.href = ROUTER_PATHS.FULL.NOT_FOUND;
        break;
      case 403:
        window.location.href = ROUTER_PATHS.FULL.FORBIDDEN;
        break;
      case 401:
        try {
          const request = error.config as InternalAxiosRequestConfig;
          const response = await axiosInstance.post("/auth/refresh");
          const accessToken = response.data?.accessToken;

          setAccessToken(accessToken);
          request.headers.Authorization = `Bearer ${accessToken}`;

          return axiosInstance(request);
        } catch (error) {
          removeAccessToken();
          return Promise.reject(error);
        }
      default:
        return Promise.reject(error);
    }
  },
);
