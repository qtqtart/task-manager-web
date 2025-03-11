import { LOCAL_STORAGE_KEYS } from "@shared/consts/local-storage-keys";
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.response?.status !== 401) return Promise.reject(error);

    try {
      const request = error.config as InternalAxiosRequestConfig;
      const response = await axiosInstance.post("/auth/refresh");
      const accessToken = response.data?.accessToken;

      window.localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken);
      request.headers.Authorization = `Bearer ${accessToken}`;
      return axiosInstance(request);
    } catch (error) {
      window.localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
      return Promise.reject(error);
    }
  },
);
