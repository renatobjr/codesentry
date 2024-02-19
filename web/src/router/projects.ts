import { RouteMeta } from "../@types/layouts";

export const PROJECTS_ROUTES = {
  LIST: "projects",
  VIEW: "projects-view",
  VIEW_ISSUE: "projects-view-issue",
  ADD: "projects-add",
  EDIT: "projects-edit",
  EDIT_ISSUE: "projects-edit-issue",
};

export default [
  {
    path: "/projects",
    name: PROJECTS_ROUTES.LIST,
    component: () => import("@/views/projects/List.vue"),
    meta: {
      breadcrumb: [
        { title: "mdi-home" },
        { title: "Projects", disable: true, href: "/projects" },
      ],
    },
  },
  {
    path: "/projects/view/:id",
    name: PROJECTS_ROUTES.VIEW,
    component: () => import("@/views/projects/View.vue"),
    meta: {
      breadcrumb: [
        { title: "mdi-home" },
        { title: "Projects", disable: false, href: "/projects" },
        { title: "View", disable: true, href: "/projects/view" },
      ],
    },
  },
  {
    path: "/projects/:idProject/issues/view/:id",
    name: PROJECTS_ROUTES.VIEW_ISSUE,
    component: () => import("@/views/issues/View.vue"),
    meta: {
      breadcrumb: [
        { title: "mdi-home", disable: false, href: "/dashboard" },
        { title: "Projects", disable: false, href: "/projects" },
        { title: "Issue", disable: false, href: "/issues" },
        { title: "View", disable: true, href: "/issues/view" },
      ],
    },
  },
  {
    path: "/projects/add",
    name: PROJECTS_ROUTES.ADD,
    component: () => import("@/views/projects/CreateEdit.vue"),
    meta: {
      breadcrumb: [
        { title: "mdi-home", disable: false, href: "/dashboard" },
        { title: "Projects", disable: false, href: "/projects" },
        { title: "Add", disable: true, href: "/projects/add" },
      ],
    },
  },
  {
    path: "/projects/edit/:id",
    name: PROJECTS_ROUTES.EDIT,
    component: () => import("@/views/projects/CreateEdit.vue"),
    meta: {
      breadcrumb: [
        { title: "mdi-home", disable: false, href: "/dashboard" },
        { title: "Projects", disable: false, href: "/projects" },
        { title: "Edit", disable: true, href: "/projects/edit" },
      ],
    },
  },
  {
    path: "/projects/:idProject/issues/edit/:id",
    name: PROJECTS_ROUTES.EDIT_ISSUE,
    component: () => import("@/views/issues/CreateEdit.vue"),
    meta: {
      breadcrumb: [
        { title: "mdi-home", disable: false, href: "/dashboard" },
        { title: "Projects", disable: false, href: "/projects" },
        { title: "Issue", disable: false, href: "/issues" },
        { title: "Edit", disable: true, href: "/issues/edit" },
      ],
    },
  },
].map((route) => {
  route["meta"] = {
    ...route["meta"],
    active: "/projects",
    layout: "Base",
    requiresAuth: true,
  } as RouteMeta;
  return route;
});
