export const ISSUES_ROUTES = {
  VIEW: 'issues-view',
}

export default [
  {
    path: '/issues',
    name: ISSUES_ROUTES.VIEW,
    component: () => import('@/views/issues/View.vue'),
  },
].map((route) => {
  route['meta'] = {
    layout: 'base',
    public: false,
  }
  return route;
});
