export const USERS_ROUTES = {
  LIST: 'users',
  VIEW: 'users-view',
  ADD: 'users-add',
  EDIT: 'users-edit',
}

export default [
  {
    path: '/users',
    name: USERS_ROUTES.LIST,
    component: () => import('@/views/users/List.vue'),
    meta: {
      breadcrumb: [
        { title: "mdi-home" },
        { title: "Users", disable: true, href: "/users" }
      ],
    },
  },
  {
    path: '/users/view/:id',
    name: USERS_ROUTES.VIEW,
    component: () => import('@/views/users/View.vue'),
    meta: {
      breadcrumb: [
        { title: "mdi-home" },
        { title: "Users", disable: false, href: "/users" },
        { title: "View", disable: true, href: "/users/view" }
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
  },
  {
    path: '/users/edit/:id',
    name: USERS_ROUTES.EDIT,
    component: () => import('@/views/users/CreateEdit.vue'),
    meta: {
      breadcrumb: [
        { title: "mdi-home", disable: false, href: "/dashboard" },
        { title: "Users", disable: false, href: "/users" },
        { title: "Edit", disable: true, href: "/users/edit" }
      ]
    }
  }
].map((route) => {
  route['meta'] = {
    ...route['meta'],
    active: '/users',
    layout: 'base',
    requiresAuth: true,
  }
  return route;
});
