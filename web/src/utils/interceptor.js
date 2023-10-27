import axios from "axios";
import { useAuthStore } from "@/store/auth";
import { storeToRefs } from "pinia";

const axios = $axios.create({
  base_url: process.env.URL_API,
})

axios.interceptors.request.use(
  function(config) {
    const store = useAuthStore();
    const { isLogged, loggedToken } = storeToRefs(store);

    if (isLogged.value) {
      config.headers.Authorization = `Bearer ${loggedToken.value}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
