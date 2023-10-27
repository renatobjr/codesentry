// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/auth'
import authService from '@/service/auth'
import auth, { AUTH_ROUTES} from './auth'
import dashboard, { DASH_ROUTES } from './dashboard'
import projects, { PROJECT_ROUTES } from './projects'
import issues, { ISSUES_ROUTES } from './issues'
import users, { USERS_ROUTES } from './users'
import settings, { SETTINGS_ROUTES } from './settings'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    ...auth,
    ...dashboard,
    ...projects,
    ...issues,
    ...users,
    ...settings
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0, behavior: 'smooth' };
  },
})

router.beforeEach(async (to, from ) => {
  const authStore = useAuthStore();
  const { isLogged } = authStore;
  if (!isLogged && to.meta.requiresAuth == true) {
    const check = await authService.check();
    console.log(check)
    if(!check) {
      return { name: AUTH_ROUTES.LOGIN };
    }
  }
})

export default router
