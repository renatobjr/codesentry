import api from "@/utils/api";

const BASE_URL = 'users';

const userService = {
  fetchUsers: async () => {
    let response = await api.get(`${BASE_URL}/list`);
    return response;
  },
  fetchUser: async (id) => {
    let response = await api.get(`${BASE_URL}/get/${id}`);
    return response;
  },
  createUser: async (data) => {
    let response = await api.post(`${BASE_URL}/create`, { ...data });
    return response;
  },
  updateUser: async (data) => {
    let response = await api.put(`${BASE_URL}/update/${data._id}`, { ...data });
    return response;
  },
}

export default userService;
