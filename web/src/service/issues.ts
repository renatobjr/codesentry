import api from "@/utils/api";
import { useIssueStore } from "@/store/issue";
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
  appendNote: async (id, data) => {
    const result = await api.put(`${BASE_URL}/notes/add/${id}`, data);

    if (result.status == 200) {
      return result.data;
    }
    return result.data;
  },
  appendFiles: async (id, data) => {
    let upload = await fileService.upload(data.value)
    if (!upload) return false;

    const result = await api.put(`${BASE_URL}/files/add/${id}`, upload);
    if (result.status == 200) {
      return true;
    }
    return result.data;
  },
  removeFile: async (id, data) => {
    console.log(data)
    const result = await api.post(`${BASE_URL}/files/delete/${id}`, data);
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
