type LayoutTypes = "Base" | "Default" | "Login"; // same as files in layouts/default folder
export default LayoutTypes;

export type RouteMeta = {
  breadcrumb: any[];
  active?: string;
  layout: string;
  origin: string | undefined;
  requiresAuth: boolean;
};
