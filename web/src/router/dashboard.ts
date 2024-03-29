import { RouteMeta } from "../@types/layouts";

export const DASH_ROUTES = {
  DASHBOARD: "dashboard",
};

export default [
  {
    path: "/dashboard",
    name: DASH_ROUTES.DASHBOARD,
    component: () => import("@/views/Dashboard.vue"),
    meta: {
      breadcrumb: [
        { title: "mdi-home" },
        { title: "Dashboard", disable: true, href: "/dashboard" }
      ],
    },
  },
].map((route) => {
  route["meta"] = {
    ...route["meta"],
    active: '/dashboard',
    layout: "Base",
    requiresAuth: true,
  } as RouteMeta;
  return route;
});
