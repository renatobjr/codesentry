export const SETTINGS_ROUTES = {
  LIST: "settings",
};

export default [
  {
    path: "/settings",
    name: SETTINGS_ROUTES.LIST,
    component: () => import("@/views/settings/View.vue"),
    meta: {
      breadcrumb: [
        { title: "mdi-home" },
        { title: "Settings", disable: true, href: "/settings" }
      ],
    },
  },
].map((route) => {
  route["meta"] = {
    ...route["meta"],
    active: "/settings",
    layout: "base",
    public: false,
  };

  return route;
});
