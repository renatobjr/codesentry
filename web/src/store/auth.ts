import { reactive, ref, computed } from "vue";
import { defineStore, acceptHMRUpdate } from "pinia";
import authService from "@/service/auth";

export const useAuthStore = defineStore("auth", () => {
  // Reactive state
  // @TODO: need to refactor
  const loggedUser = reactive({
    _id: null,
    name: "",
    email: "",
    avatar: "",
    role: "",
    firstLogin: "",
    status: "",
    lastLogin: "",
    projects: [],
    issues: [],
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
    return await authService.login({ email, password });
  };
  async function verifyCode(data) {
    return await authService.verifyCode(data);
  };
  async function resendCode(data) {
    return  await authService.resendCode(data);
  };
  async function setPassword(data) {
    return await authService.setPassword(data);
  };
  async function verifyEmail(email) {
    return await authService.verifyEmail(email);
  };
  async function subscribe(data) {
    return await authService.subscribe(data);
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
    verifyEmail,
    resendCode,
    setLoginData,
    setPassword,
    subscribe,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
