import URLS from "apps/admin/utils/urls";
import { guardedRoutes } from "apps/admin/utils/router";
import PlatformsPage from "./pages/PlatformsPage";

guardedRoutes([
  {
    path: URLS.platforms,
    component: PlatformsPage,
  },
]);
