// Composables
import { createRouter, createWebHistory } from 'vue-router'
import auth, { AUTH_ROUTES} from './auth'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    ...auth
  ]
})

export default router
