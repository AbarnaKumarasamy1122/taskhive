import api from "./api";

export const getMyProjects = async () => {
  const response = await api.get("/member/projects");

  return response.data.data;
};
