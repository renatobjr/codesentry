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
    const upload = await fileService.upload(data.attachedFiles);

    if (upload) data.attachedFiles = upload;

    const result = await api.post(`${BASE_URL}/create`, data);
    if (result.status == 200) {
      return true;
    }
    return result.data;
  },
  updateIssue: async (data) => {
    let upload = null;
    if (data.issue.attachedFiles.length != 0) upload = await fileService.upload(data.issue.attachedFiles);
    if (upload) data.issue.attachedFiles = upload;

    const result = await api.put(`${BASE_URL}/update/${data.id}`, data);
    if (result.status == 200) {
      return true;
    }
    return result.data;
  },
  deleteIssue: async (id) => {
    const result = await api.post(`${BASE_URL}/remove/${id}`);
    if (result.status == 200) {
      return true;
    }
    return result.data;
  }
}

export default issueService;
