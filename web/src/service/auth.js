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
      useAuthStore().setLoginData(response.data.user, response.data.token);
      return true;
    }
    return response.data;
  },
  verifyCode: async (data) => {
    const response = await api.post(`${BASE_URL}/verify-code`, { ...data })

    if (response.status == 200) {
      localStorage.setItem(process.env.RECOVERY_TOKEN, response.data.token)
      return true;
    }
    return response.data;
  },
  resendCode: async (data) => {
    const response = await api.post(`${BASE_URL}/resend-code`, { ...data });
    if (response.status == 200) {
      localStorage.setItem(process.env.RECOVERY_TOKEN, response.data.token)
      return true;
    }
    return response.data;
  },
  setPassword: async (data) => {
    const token = localStorage.getItem(process.env.RECOVERY_TOKEN);

    const response = await api.post(`${BASE_URL}/set-password`, { ...data, token });

    if (response.status == 200) {
      localStorage.removeItem(process.env.RECOVERY_TOKEN);
      return true;
    }
    return false;
  },
  verifyEmail: async (email) => {
    const response = await api.post(`${BASE_URL}/verify-email`, { email })

    if (response.status == 200) {
      localStorage.setItem(process.env.RECOVERY_TOKEN, response.data.token)
      return true;
    }
    return response.data;
  },
  subscribe: async (data) => {
    const response = await api.post(`${BASE_URL}/subscribe`, { ...data });

    if (response.status == 200) {
      return true;
    }
    return response.data;
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
