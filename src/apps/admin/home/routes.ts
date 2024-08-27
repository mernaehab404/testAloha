import router from "@mongez/react-router";
import { guardedRoutes } from "app/utils/router";
import URLS from "app/utils/urls";
import NotFoundPage from "apps/admin/design-system/layouts/NotFoundPage";
import HomePage from "apps/admin/home/pages/HomePage";
import { hasPermission } from "../account/utils/permissions";

router.add(URLS.notfound, NotFoundPage);

guardedRoutes([
  {
    path: URLS.home,
    component: HomePage,
    middleware: [hasPermission("dashboard")],
  },
]);
