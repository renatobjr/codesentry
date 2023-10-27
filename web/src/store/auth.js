import { reactive, ref, computed } from "vue";
import { defineStore, acceptHMRUpdate } from "pinia";
import authService from "@/service/auth";

export const useAuthStore = defineStore("auth", () => {
  // Reactive state
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
  let recoveryEmail = ref('')

  // Actions
  const isLogged = computed(() => loggedToken.value != null);
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
  const clearLoginData = () => {
    loggedUser._id = null;
    loggedUser.name = "";
    loggedUser.email = "";
    loggedUser.avatar = "";
    loggedUser.role = "";
    loggedUser.firstLogin = "";
    loggedUser.status = "";
    loggedUser.lastLogin = "";
    loggedUser.projects = "";
    loggedUser.issues = "";
    // User validation token
    loggedToken.value = null;
  };
  async function login({ email, password }) {
    const response = await authService.login({ email, password });

    if (response.status != 200) return false;
    setLoginData(response.data.user, response.data.token);

    return true;
  };
  async function verifyCode(data) {
    const response = await authService.verifyCode(data);

    if (response.status != 200) return false;
    return true;
  };
  async function resendCode(data) {
    const response = await authService.resendCode(data);

    if (response.status != 200) return false;
    return true;
  };
  async function setPassword(data) {
    const response = await authService.setPassword(data);

    if (response.status != 200) return false;
    return true;
  };
  async function verifyEmail(email) {
    const response = await authService.verifyEmail(email);

    if (response.status != 200) return false;

    return true;
  }
  function logout() {
    clearLoginData();
    localStorage.removeItem(process.env.SESSION_TOKEN);
  };

  return {
    loggedUser,
    loggedToken,
    isLogged,
    login,
    logout,
    recoveryEmail,
    verifyCode,
    resendCode,
    setLoginData,
    setPassword,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
