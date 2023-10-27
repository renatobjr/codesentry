import { useAuthStore } from "@/store/auth";
import api from "@/utils/api";
import { storeToRefs } from "pinia";

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
  verifyCode: async (data) => {
    const response = await api.post(`${BASE_URL}/verify-code`, { ...data })

    if (response.status == 200) {
      localStorage.setItem(process.env.PASSWORD_TOKEN, response.data.token)
    }
    return response;
  },
  resendCode: async (data) => {
    const response = await api.post(`${BASE_URL}/resend-code`, { ...data });
    return response;
  },
  setPassword: async (data) => {
    const token = localStorage.getItem(process.env.PASSWORD_TOKEN);

    const response = await api.post(`${BASE_URL}/set-password`, { ...data, token });

    if (response.status == 200) {
      localStorage.removeItem(process.env.PASSWORD_TOKEN);
    }
    return response;
  },
  verifyEmail: async (email) => {
    const response = await api.post(`${BASE_URL}/verify-email`, { email })
    return response;
  },
  check: async () => {
    const session = localStorage.getItem(process.env.SESSION_TOKEN);
    if (session) {
      const response = await getSession(session);

      if(response.status == 200) {
        useAuthStore().setLoginData(response.data.user, response.data.token);
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
