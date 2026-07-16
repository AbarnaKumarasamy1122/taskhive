import api from "./api";

export const getMyProjects = async () => {
  const res = await api.get("/member/projects");

  return res.data;
};

export const getMyTasks = async () => {
  const res = await api.get("/member/tasks");

  return res.data;
};

export const updateTaskStatus = async (id: string, status: string) => {
  const res = await api.patch(`/tasks/${id}/status`, {
    status,
  });

  return res.data;
};

export const addComment = async (taskId: string, comment: string) => {
  const res = await api.post(`/tasks/${taskId}/comments`, {
    comment,
  });

  return res.data;
};

export const getNotifications = async () => {
  const res = await api.get("/member/notifications");

  return res.data;
};

export const getActivities = async () => {
  const res = await api.get("/member/activity");

  return res.data;
};
