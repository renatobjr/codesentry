export const AUTH_ROUTES = {
  LOGIN: 'login',
  RECOVERY: 'recovery',
  VERIFY: 'verify',
  RESET: 'reset-password',
  SUBSCRIBE: 'request-subscribe',
  REGISTER: 'register',
  CREATE: 'create-password',
  PASSWORD_SAVED: 'password-saved',
}

export default [
  {
    path: '/',
    name: AUTH_ROUTES.LOGIN,
    component: () => import('@/views/auth/Login.vue'),
  },
  {
    path: '/recovery',
    name: AUTH_ROUTES.RECOVERY,
    component: () => import('@/views/auth/Recovery.vue'),
  },
  {
    path: '/verify',
    name: AUTH_ROUTES.VERIFY,
    component: () => import('@/views/auth/Verify.vue'),
    meta: {
      origin: 'verify'
    }
  },
  {
    path: '/register',
    name: AUTH_ROUTES.REGISTER,
    component: () => import('@/views/auth/Verify.vue'),
    meta: {
      origin: 'register'
    }
  },
  {
    path: '/reset-password',
    name: AUTH_ROUTES.RESET,
    component: () => import('@/views/auth/SetPassword.vue'),
    meta: {
      origin: 'reset-password'
    }
  },
  {
    path: '/create-password',
    name: AUTH_ROUTES.CREATE,
    component: () => import('@/views/auth/SetPassword.vue'),
    meta: {
      origin: 'create-password'
    }
  },
  {
    path: '/request-subscribe',
    name: AUTH_ROUTES.SUBSCRIBE,
    component: () => import('@/views/auth/Subscribe.vue'),
  },
  {
    path: '/password-saved',
    name: AUTH_ROUTES.PASSWORD_SAVED,
    component: () => import('@/views/auth/PasswordSaved.vue'),
  },
].map((route) => {
  route['meta'] = {
    ...route["meta"],
    layout: 'login',
    requiresAuth: false,
  }
  return route;
});
