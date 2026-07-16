import api from "./api";

// Get all tasks

export const getTasks = async () => {
  const response = await api.get("/tasks");

  return response.data;
};

// Create task

export const createTask = async (data: any) => {
  const response = await api.post("/tasks", data);

  return response.data;
};

// Update task status

export const updateTaskStatus = async (id: string, status: string) => {
  const response = await api.patch(`/tasks/${id}/status`, {
    status,
  });

  return response.data;
};

// Delete task

export const deleteTask = async (id: string) => {
  const response = await api.delete(`/tasks/${id}`);

  return response.data;
};

// Add comment

export async function addComment(taskId: string, comment: string) {
  const response = await api.post(`/tasks/${taskId}/comments`, {
    comment,
  });

  return response.data;
}
