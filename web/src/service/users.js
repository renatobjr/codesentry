import api from "@/utils/api";

const BASE_URL = 'users';

const userService = {
  fetchUsers: async () => {
    return await api.get(`${BASE_URL}/list`);
  },
  fetchUser: async (id) => {
    return await api.get(`${BASE_URL}/get/${id}`);
  },
  createUser: async (data) => {
    const result = await api.post(`${BASE_URL}/create`, { ...data });
    if (result.status == 200) {
      return true;
    }
    return result.data;
  },
  updateUser: async (data) => {
    return await api.put(`${BASE_URL}/update/${data._id}`, { ...data });
  },
  deleteUser: async (id) => {
    return await api.post(`${BASE_URL}/remove/${id}`);
  },
  approveUser: async (id) => {
    return await api.post(`${BASE_URL}/approve/${id}`);
  },
}

export default userService;
