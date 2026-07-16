import api from "./api";

export const loginApi = async (email: string, password: string) => {
  const { data } = await api.post("/auth/login", {
    email,
    password,
  });

  return data;
};

export const registerApi = async (payload: any) => {
  const { data } = await api.post("/auth/register", payload);

  return data;
};
