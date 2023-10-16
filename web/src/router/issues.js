export const ISSUES_ROUTES = {
  LIST: 'issues',
}

export default [
  {
    path: '/issues',
    name: ISSUES_ROUTES.LIST,
    component: () => import('@/views/issues/View.vue'),
  },
].map((route) => {
  route['meta'] = {
    layout: 'base',
    public: false,
  }
  return route;
});
