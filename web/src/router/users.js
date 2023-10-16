export const USERS_ROUTES = {
  LIST: 'users',
}

export default [
  {
    path: '/users',
    name: USERS_ROUTES.LIST,
    component: () => import('@/views/users/View.vue'),
  },
].map((route) => {
  route['meta'] = {
    layout: 'base',
    public: false,
  }
  return route;
});
