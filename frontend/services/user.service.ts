import api from "./api";

export const getUsers = async () => {
  const response = await api.get("/users?role=TEAM_MEMBER");

  if (Array.isArray(response.data)) {
    return response.data;
  }

  if (Array.isArray(response.data.data)) {
    return response.data.data;
  }

  return [];
};

export const createUser = async (data: any) => {
  const response = await api.post("/users", data);

  return response.data;
};

export const updateUserRole = async (id: string, roleId: string) => {
  return api.patch(`/users/${id}`, {
    roleId,
  });
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
