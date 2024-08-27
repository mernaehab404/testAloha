import URLS from "apps/admin/utils/urls";
import { guardedRoutes } from "apps/admin/utils/router";
import ProjectsPage from "./pages/ProjectsPage";

guardedRoutes([
  {
    path: URLS.projects,
    component: ProjectsPage,
  },
]);
