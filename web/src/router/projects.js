export const PROJECT_ROUTES = {
  LIST: 'projects',
  ADD: 'projects-add',
}

export default [
  {
    path: '/projects',
    name: PROJECT_ROUTES.VIEW,
    component: () => import('@/views/projects/View.vue'),
  },
  {
    path: '/projects/add',
    name: PROJECT_ROUTES.ADD,
    component: () => import('@/views/projects/CreateEdit.vue'),
  }
].map((route) => {
  route['meta'] = {
    layout: 'base',
    public: false,
  }
  return route;
});
