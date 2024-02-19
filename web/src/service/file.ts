import api from "@/utils/api";

const BASE_URL = 'files';

const fileService = {
  upload: async (data) => {
    const formData = new FormData();

    data.forEach(file => {
      formData.append('files', file, file.name);
    });

    const result = await api.post(`${BASE_URL}/upload`, formData);
    if (result.status == 200) {
      return result.data;
    }
    return false;
  }
}

export default fileService;
