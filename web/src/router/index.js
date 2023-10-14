// Composables
import { createRouter, createWebHistory } from 'vue-router'
import auth, { AUTH_ROUTES} from './auth'
import dashboard, { DASH_ROUTES } from './dashboard'
import projects, { PROJECT_ROUTES } from './projects'
import issues from './issues'
import users, { USERS_ROUTES } from './users'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    ...auth,
    ...dashboard,
    ...projects,
    ...issues,
    ...users,
  ]
})

export default router
