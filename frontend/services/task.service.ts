import api from "./api";

// Get tasks

export const getTasks = async () => {
  const res = await api.get("/tasks");

  return res.data.data ?? [];
};

// Create

export const createTask = async (data: any) => {
  const res = await api.post("/tasks", data);

  return res.data;
};

// Update Status

export const updateTaskStatus = async (id: string, status: string) => {
  const res = await api.patch(`/tasks/${id}/status`, {
    status,
  });

  return res.data;
};

// Delete

export const deleteTask = async (id: string) => {
  const res = await api.delete(`/tasks/${id}`);

  return res.data;
};

// Comment

export const addComment = async (taskId: string, comment: string) => {
  const res = await api.post(`/tasks/${taskId}/comments`, {
    comment,
  });

  return res.data;
};
