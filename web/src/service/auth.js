import { useAuthStore } from "@/store/auth";
import api from "@/utils/api";

const BASE_URL = 'auth';

async function getSession(token) {
  const response = await api.get(`${BASE_URL}/session`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response;
}

const authService = {
  login: async (data) => {
    const response = await api.post(`${BASE_URL}/login`, { ...data })

    if(response.status == 200) {
      localStorage.setItem(process.env.SESSION_TOKEN, response.data.token)
    }
    return response;
  },
  check: async () => {
    const session = localStorage.getItem(process.env.SESSION_TOKEN);
    if (session) {
      const response = await getSession(session);
      console.log(response);

      if(response.status == 200) {
        useAuthStore().setLoginData(response.data.user, session);
        return response.status
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

export default authService;
