export const ISSUES_ROUTES = {
  LIST: 'issues',
  VIEW: 'issues-view',
  ADD: 'issues-add',
  EDIT: 'issues-edit',
}

export default [
  {
    path: '/issues',
    name: ISSUES_ROUTES.LIST,
    component: () => import('@/views/issues/List.vue'),
    meta: {
      breadcrumb: [
        { title: "mdi-home" },
        { title: "Issues", disable: true, href: "/issues" }
      ],
    },
  },
  {
    path: '/issues/view/:id',
    name: ISSUES_ROUTES.VIEW,
    component: () => import('@/views/issues/View.vue'),
    meta: {
      breadcrumb: [
        { title: "mdi-home" },
        { title: "Issues", disable: false, href: "/issues" },
        { title: "View", disable: true, href: "/issues/view" }
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
  },
  {
    path: '/issues/edit/:id',
    name: ISSUES_ROUTES.EDIT,
    component: () => import('@/views/issues/CreateEdit.vue'),
    meta: {
      breadcrumb: [
        { title: "mdi-home", disable: false, href: "/dashboard" },
        { title: "Issues", disable: false, href: "/issues" },
        { title: "Edit", disable: true, href: "/issues/edit" }
      ],
    },
  },
].map((route) => {
  route['meta'] = {
    ...route['meta'],
    active: '/issues',
    layout: 'base',
    public: false,
  }
  return route;
});
