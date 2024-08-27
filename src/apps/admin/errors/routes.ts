import URLS from "apps/admin/utils/urls";
import { guardedRoutes } from "apps/admin/utils/router";
import ErrorsPage from "./pages/ErrorsPage";

guardedRoutes([
  {
    path: URLS.errors,
    component: ErrorsPage,
  },
]);
