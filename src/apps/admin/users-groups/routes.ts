import { guardedRoutes } from "apps/admin/utils/router";
import URLS from "apps/admin/utils/urls";
import UsersGroupsPage from "./pages/UsersGroupsPage";

guardedRoutes([
  {
    path: URLS.usersGroups,
    component: UsersGroupsPage,
  },
]);
