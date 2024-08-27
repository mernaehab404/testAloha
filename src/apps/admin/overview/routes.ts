import { publicRoutes } from "apps/admin/utils/router";
import URLS from "apps/admin/utils/urls";
import { hasPermission } from "../account/utils/permissions";
import OverviewPage from "./pages/OverviewPage";

publicRoutes([
  {
    path: URLS.overview,
    component: OverviewPage,
    middleware: [hasPermission("overview")],
  },
]);
