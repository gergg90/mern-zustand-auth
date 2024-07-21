import { authAPI } from "@/lib/axios";

export const loginRequest = async (email: string, password: string) => {
  const data = await authAPI.post("/login", {
    email,
    password,
  });

  return data;
};

export const profileRequest = async () => {
  const data = await authAPI.get("/profile");
  return data;
};
