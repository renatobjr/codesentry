// Composables
import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/store/auth";
import authService from "@/service/auth";
import auth, { AUTH_ROUTES } from "./auth";
import dashboard from "./dashboard";
import projects from "./projects";
import issues from "./issues";
import users from "./users";
import settings from "./settings";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    ...auth,
    ...dashboard,
    ...projects,
    ...issues,
    ...users,
    ...settings,
  ],
  scrollBehavior(_to, _from, _savedPosition) {
    return { x: 0, y: 0, behavior: "smooth" };
  },
});

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore();
  const { isLogged } = authStore;

  if (!isLogged && to.meta.requiresAuth == true) {
    const check = await authService.check();
    if (!check) {
      return { name: AUTH_ROUTES.LOGIN };
    }
  }
});

export default router;
