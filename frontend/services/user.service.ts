import api from "./api";

export const getUsers = async () => {
  const response = await api.get("/users");

  return response.data.data;
};

export const createUser = async (data: any) => {
  const response = await api.post("/users", data);

  return response.data;
};

export const updateUser = async (id: string, data: any) => {
  const response = await api.put(
    `/users/${id}`,

    data,
  );

  return response.data;
};

export const deleteUser = async (id: string) => {
  return await api.delete(`/users/${id}`);
};

export const assignRole = async (id: string, role: string) => {
  return await api.patch(
    `/users/${id}/role`,

    {
      role,
    },
  );
};
