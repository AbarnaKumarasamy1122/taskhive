import api from "./api";

export const getTasks = async () => {
  const response = await api.get("/tasks");

  return response.data.data;
};

export const createTask = async (data: any) => {
  return api.post("/tasks", data);
};

export const updateTask = async (id: string, data: any) => {
  return api.put(
    `/tasks/${id}`,

    data,
  );
};

export const deleteTask = async (id: string) => {
  return api.delete(`/tasks/${id}`);
};

export const getMyTasks = async () => {
  const response = await api.get("/member/tasks");

  return response.data.data;
};

export const updateTaskStatus = async (
  id: string,

  status: string,
) => {
  return api.patch(
    `/tasks/${id}/status`,

    {
      status,
    },
  );
};

export const addComment = async (
  taskId: string,

  comment: string,
) => {
  return api.post(
    `/tasks/${taskId}/comments`,

    {
      comment,
    },
  );
};
