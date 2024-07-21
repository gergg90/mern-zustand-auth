import { useAuthStore } from "@/stores/auth";
import axios from "axios";

export const authAPI = axios.create({
  baseURL: "http://localhost:3000/auth",
  withCredentials: true,
});

authAPI.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  config.headers = {
    Authorization: `Bearer ${token}`,
  };

  return config;
});
