export const USERS_ROUTES = {
  VIEW: 'users-view',
}

export default [
  {
    path: '/users',
    name: USERS_ROUTES.VIEW,
    component: () => import('@/views/users/View.vue'),
  },
].map((route) => {
  route['meta'] = {
    layout: 'base',
    public: false,
  }
  return route;
});
