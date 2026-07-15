import api from "./api";

export const getDashboardStats = async () => {

    const response =
        await api.get("/dashboard/admin");

    return response.data;

};