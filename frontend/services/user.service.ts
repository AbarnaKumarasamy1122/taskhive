import api from "./api";

export interface Role {
  id: string;

  name: string;
}
export interface User {
  id: string;

  name: string;

  email: string;

  role: string | Role;
}

// Normalize API response

const extractUsers = (data: any): User[] => {
  if (Array.isArray(data)) {
    return data;
  }

  if (Array.isArray(data?.data)) {
    return data.data;
  }

  if (Array.isArray(data?.users)) {
    return data.users;
  }

  return [];
};

// Get all users (Admin)

export const getUsers = async (): Promise<User[]> => {
  const response = await api.get("/users");

  if (Array.isArray(response.data)) return response.data;

  if (Array.isArray(response.data.data)) return response.data.data;

  return [];
};

// Get only Team Members
// Used by Project Manager

export const getTeamMembers = async (): Promise<User[]> => {
  try {
    const response = await api.get("/users/team-members");

    if (Array.isArray(response.data)) return response.data;

    if (Array.isArray(response.data.data)) return response.data.data;

    return [];
  } catch (error: any) {
    console.error("GET TEAM MEMBERS ERROR", error.response?.data);

    throw error;
  }
};

// Alternative endpoint
// if backend has /users/team-members

export const getTeamMembersList = async (): Promise<User[]> => {
  try {
    const response = await api.get("/users/team-members");

    return extractUsers(response.data);
  } catch (error: any) {
    console.error("GET TEAM MEMBERS LIST ERROR", error.response?.data);

    throw error;
  }
};

// Create user (Admin)

export const createUser = async (data: any) => {
  const response = await api.post("/users", data);

  return response.data;
};

// Update user role (Admin)

export const updateUserRole = async (id: string, roleId: string) => {
  const response = await api.patch(`/users/${id}`, {
    roleId,
  });

  return response.data;
};

// Delete user (Admin)

export const deleteUser = async (id: string) => {
  const response = await api.delete(`/users/${id}`);

  return response.data;
};

// Assign role

export const assignRole = async (id: string, role: string) => {
  const response = await api.patch(`/users/${id}/role`, {
    role,
  });

  return response.data;
};
