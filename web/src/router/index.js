// Composables
import { createRouter, createWebHistory } from 'vue-router'
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

export default router
