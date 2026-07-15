import api from "./api";

export const getProjects = async () => {
  const response = await api.get("/projects");

  return response.data.data;
};

export const createProject = async (data: any) => {
  const response = await api.post("/projects", data);

  return response.data;
};

export const updateProject = async (id: string, data: any) => {
  const response = await api.put(
    `/projects/${id}`,

    data,
  );

  return response.data;
};

export const deleteProject = async (id: string) => {
  return api.delete(`/projects/${id}`);
};

export const assignMember = async (
  projectId: string,

  userId: string,
) => {
  return api.post(
    `/projects/${projectId}/members`,

    {
      userId,
    },
  );
};
