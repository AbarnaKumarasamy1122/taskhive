import api from "./api";

import { Project } from "@/types/project";

// Get Projects

export const getProjects = async (): Promise<Project[]> => {
  const response = await api.get("/projects");

  console.log("PROJECT API RESPONSE", response.data);

  if (Array.isArray(response.data)) {
    return response.data;
  }

  if (Array.isArray(response.data.data)) {
    return response.data.data;
  }

  if (Array.isArray(response.data.projects)) {
    return response.data.projects;
  }

  return [];
};

// Create Project

export const createProject = async (data: any) => {
  const response = await api.post("/projects", data);

  return response.data;
};

// Update Project

export const updateProject = async (id: string, data: any) => {
  const response = await api.patch(`/projects/${id}`, data);

  return response.data;
};

// Delete Project

export const deleteProject = async (id: string) => {
  const response = await api.delete(`/projects/${id}`);

  return response.data;
};

// Assign Members

export const assignMembers = async (projectId: string, members: string[]) => {
  const response = await api.post(`/projects/${projectId}/members`, {
    members,
  });

  return response.data;
};
