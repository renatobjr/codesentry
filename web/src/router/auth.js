export const AUTH_ROUTES = {
  LOGIN: 'login',
  RECOVERY: 'recovery',
  VERIFY: 'verify',
  RESET: 'reset-password',
  SUBSCRIBE: 'request-subscribe',
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
  },
  {
    path: '/reset-password',
    name: AUTH_ROUTES.RESET,
    component: () => import('@/views/auth/ResetPassword.vue'),
  },
  {
    path: '/request-subscribe',
    name: AUTH_ROUTES.SUBSCRIBE,
    component: () => import('@/views/auth/Subscribe.vue'),
  },
].map((route) => {
  route['meta'] = {
    layout: 'login',
    public: true,
  }
  return route;
});
