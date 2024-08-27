import URLS from "apps/admin/utils/urls";
import { guardedRoutes } from "apps/admin/utils/router";
import OrganizationsPage from "./pages/OrganizationsPage";

guardedRoutes([
  {
    path: URLS.organizations,
    component: OrganizationsPage,
  },
]);
