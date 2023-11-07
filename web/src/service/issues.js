import api from "@/utils/api";
import fileService from "./file";

const BASE_URL = 'issues';

const issueService = {
  fetchIssues: async (params) => {
    const result = await api.get(`${BASE_URL}/list`, {params});
    if (result.status == 200) {
      return result.data;
    }
    return null;
  },
  fecthIssue: async (id) => {
    const result = await api.get(`${BASE_URL}/get/${id}`);
    if (result.status == 200) {
      return result.data;
    }
    return null;
  },
  createIssue: async (data) => {
    const upload = await fileService.upload(data.uploadFiles);
    if (upload) data.attechedFiles = upload;

    const result = await api.post(`${BASE_URL}/create`, data);
    console.log(result)
    if (result.status == 200) {
      return true;
    }
    return result.data;
  }
}

export default issueService;
