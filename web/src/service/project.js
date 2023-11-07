import api from "@/utils/api";

const BASE_URL = 'projects';

const projectService = {
  fetchProjects: async () => {
    const result = await api.get(`${BASE_URL}/list`);
    if (result.status == 200) {
      return result.data;
    }
    return null;
  },
  fetchProject: async (id) => {
    const result =  await api.get(`${BASE_URL}/get/${id}`);

    if (result.status == 200) {
      return result.data;
    }
    return null;
  },
  createProject: async (data) => {
    const result = await api.post(`${BASE_URL}/create`, { ...data });
    if (result.status == 200) {
      return true
    }
    return result.data;
  },
  updateProject: async (data) => {
    const result = await api.put(`${BASE_URL}/update/${data.id}`, { ...data });
    if (result.status == 200) {
      return true;
    }
    return result.data
  },
  deleteProject: async (id) => {
    const result = await api.post(`${BASE_URL}/remove/${id}`);
    if (result.status == 200) {
      return true;
    }
    return result.data;
  }
}

export default projectService;

