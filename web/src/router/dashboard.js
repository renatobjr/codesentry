export const DASH_ROUTES = {
  DASHBOARD: 'dashboard',
}

export default [
  {
    path: '/dashboard',
    name: DASH_ROUTES.DASHBOARD,
    component: () => import('@/views/Dashboard.vue'),
  },
].map((route) => {
  route['meta'] = {
    layout: 'base',
    public: false,
  }
  return route;
});
