export const USERS_ROUTES = {
  LIST: 'users',
  ADD: 'users-add',
}

export default [
  {
    path: '/users',
    name: USERS_ROUTES.LIST,
    component: () => import('@/views/users/View.vue'),
    meta: {
      breadcrumb: [
        { title: "mdi-home" },
        { title: "Users", disable: true, href: "/users" }
      ],
    },
  },
  {
    path: '/users/add',
    name: USERS_ROUTES.ADD,
    component: () => import('@/views/users/CreateEdit.vue'),
    meta: {
      breadcrumb: [
        { title: "mdi-home", disable: false, href: "/dashboard" },
        { title: "Users", disable: false, href: "/users" },
        { title: "Add", disable: true, href: "/users/add" }
      ],
    },
  }
].map((route) => {
  route['meta'] = {
    ...route['meta'],
    active: '/users',
    layout: 'base',
    public: false,
  }
  return route;
});
