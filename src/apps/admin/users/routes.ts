import URLS from "apps/admin/utils/urls";
import { guardedRoutes } from "apps/admin/utils/router";
import UsersPage from "./pages/UsersPage";

guardedRoutes([
  {
    path: URLS.users,
    component: UsersPage,
  },
]);
