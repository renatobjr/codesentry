export const ISSUES_ROUTES = {
  LIST: 'issues',
  ADD: 'issues-add',
}

export default [
  {
    path: '/issues',
    name: ISSUES_ROUTES.LIST,
    component: () => import('@/views/issues/View.vue'),
    meta: {
      breadcrumb: [
        { title: "mdi-home" },
        { title: "Issues", disable: true, href: "/issues" }
      ],
    },
  },
  {
    path: '/issues/add',
    name: ISSUES_ROUTES.ADD,
    component: () => import('@/views/issues/CreateEdit.vue'),
    meta: {
      breadcrumb: [
        { title: "mdi-home", disable: false, href: "/dashboard" },
        { title: "Issues", disable: false, href: "/issues" },
        { title: "Add", disable: true, href: "/issues/add" }
      ],
    },
  }
].map((route) => {
  route['meta'] = {
    ...route['meta'],
    active: '/issues',
    layout: 'base',
    public: false,
  }
  return route;
});
