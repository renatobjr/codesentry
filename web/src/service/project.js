import api from "@/utils/api";

const BASE_URL = 'projects';

const projectService = {
  createProject: async (data) => {
    const result = await api.post(`${BASE_URL}/create`, { ...data });
    if (result.status == 200) {
      return true
    }
    return result.data;
  }
}

export default projectService;

