export const PROJECT_ROUTES = {
  LIST: 'projects',
  ADD: 'projects-add',
}

export default [
  {
    path: '/projects',
    name: PROJECT_ROUTES.VIEW,
    component: () => import('@/views/projects/View.vue'),
    meta: {
      breadcrumb: [
        { title: "mdi-home" },
        { title: "Projects", disable: true, href: "/projects" }
      ],
    },
  },
  {
    path: '/projects/add',
    name: PROJECT_ROUTES.ADD,
    component: () => import('@/views/projects/CreateEdit.vue'),
    meta: {
      breadcrumb: [
        { title: "mdi-home", disable: false, href: "/dashboard" },
        { title: "Projects", disable: false, href: "/projects" },
        { title: "Add", disable: true, href: "/projects/add" }
      ],
    },
  }
].map((route) => {
  route['meta'] = {
    ...route['meta'],
    active: '/projects',
    layout: 'base',
    public: false,
  }
  return route;
});
