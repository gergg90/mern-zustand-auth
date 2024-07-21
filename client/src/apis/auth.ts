import axios from "axios";

export const baseApi = axios.create({
  baseURL: "http://localhost:3000/auth",
});

export const loginRequest = async (email: string, password: string) => {
  const data = await baseApi.post("/login", {
    email,
    password,
  });

  return data;
};

export const profileRequest = async (token: string) => {
  const data = await baseApi.get("/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
