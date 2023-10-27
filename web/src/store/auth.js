import { reactive, ref, computed } from "vue";
import { defineStore, acceptHMRUpdate } from "pinia";
import authService from "@/service/auth";

export const useAuthStore = defineStore("auth", () => {
  const loggedUser = reactive({
    _id: null,
    name: "",
    email: "",
    avatar: "",
    role: "",
    firstLogin: "",
    status: "",
    lastLogin: "",
    projects: "",
    issues: "",
  });
  const loggedToken = ref(null);
  const isLogged = computed(() => loggedToken.value != null);

  // Actions
  const setLoginData = (userData, token) => {
    loggedUser._id = userData._id;
    loggedUser.name = userData.name;
    loggedUser.email = userData.email;
    loggedUser.avatar = userData.avatar;
    loggedUser.role = userData.role;
    loggedUser.firstLogin = userData.firstLogin;
    loggedUser.status = userData.status;
    loggedUser.lastLogin = userData.lastLogin;
    loggedUser.projects = userData.projects;
    loggedUser.issues = userData.issues;
    // User validation token
    loggedToken.value = token;
  };

  async function login({ email, password }) {
    const response = await authService.login({ email, password });

    if (response.status != 200) return false;
    setLoginData(response.data.user, response.data.token);

    return true;
  }

  function logout() {
    loggedToken.value = null;
    localStorage.removeItem(process.env.SESSION_TOKEN);
  }

  return {
    loggedUser,
    loggedToken,
    isLogged,
    login,
    logout,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
