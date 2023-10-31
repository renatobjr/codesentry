import api from "@/utils/api";

const BASE_URL = 'users';

const userService = {
  fetchUsers: async () => {
    const result = await api.get(`${BASE_URL}/list`);
    if (result.status == 200) {
      return result.data;
    }
    return null;
  },
  fetchUser: async (id) => {
    const result =  await api.get(`${BASE_URL}/get/${id}`);

    if (result.status == 200) {
      return result.data;
    }
    return null;
  },
  createUser: async (data) => {
    const result = await api.post(`${BASE_URL}/create`, { ...data });
    if (result.status == 200) {
      return true;
    }
    return result.data;
  },
  updateUser: async (data) => {
    const result = await api.put(`${BASE_URL}/update/${data._id}`, { ...data });
    if (result.status == 200) {
      return true;
    }
    return result.data
  },
  deleteUser: async (id) => {
    const result = await api.post(`${BASE_URL}/remove/${id}`);
    if (result.status == 200) {
      return true;
    }
    return result.data;
  },
  approveUser: async (id) => {
    const result = await api.post(`${BASE_URL}/approve/${id}`);
    if (result.status == 200) {
      return true;
    }
    return result.data;
  },
}

export default userService;
