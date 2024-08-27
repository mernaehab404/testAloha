import URLS from "apps/admin/utils/urls";
import { guardedRoutes } from "apps/admin/utils/router";
import ReasonsPage from "./pages/ReasonsPage";

guardedRoutes([
  {
    path: URLS.reasons,
    component: ReasonsPage,
  },
]);
