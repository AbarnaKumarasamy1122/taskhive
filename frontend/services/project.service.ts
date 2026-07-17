import api from "./api";

import { Project } from "@/types/project";

// Get all projects

export const getProjects = async (): Promise<Project[]> => {
  const response = await api.get("/projects");

  const data = response.data;

  if (Array.isArray(data)) {
    return data;
  }

  if (Array.isArray(data.data)) {
    return data.data;
  }

  if (Array.isArray(data.projects)) {
    return data.projects;
  }

  return [];
};

// Get single project

export const getProject = async (id: string): Promise<Project> => {
  const response = await api.get(`/projects/${id}`);

  return response.data.data ?? response.data;
};

// Create project

export const createProject = async (data: any) => {
  const payload = {
    ...data,

    startDate: data.startDate ? new Date(data.startDate).toISOString() : null,

    endDate: data.endDate ? new Date(data.endDate).toISOString() : null,
  };

  const response = await api.post("/projects", payload);

  return response.data;
};

// Update project

export const updateProject = async ({
  id,
  data,
}: {
  id: string;
  data: any;
}) => {
  const { members, ...projectData } = data;

  const payload = {
    ...projectData,

    startDate: projectData.startDate
      ? new Date(projectData.startDate).toISOString()
      : null,

    endDate: projectData.endDate
      ? new Date(projectData.endDate).toISOString()
      : null,

    members,
  };

  const response = await api.patch(`/projects/${id}`, payload);

  return response.data;
};

// Delete project

export const deleteProject = async (id: string) => {
  const response = await api.delete(`/projects/${id}`);

  return response.data;
};

// Assign members

export const assignMembers = async ({
  projectId,

  members,
}: {
  projectId: string;

  members: string[];
}) => {
  const response = await api.post(`/projects/${projectId}/members`, {
    members,
  });

  return response.data;
};
