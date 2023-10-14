export const PROJECT_ROUTES = {
  VIEW: 'projects-view',
}

export default [
  {
    path: '/projects',
    name: PROJECT_ROUTES.VIEW,
    component: () => import('@/views/projects/View.vue'),
  },
].map((route) => {
  route['meta'] = {
    layout: 'base',
    public: false,
  }
  return route;
});
