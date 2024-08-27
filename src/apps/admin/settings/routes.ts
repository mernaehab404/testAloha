import URLS from "app/utils/urls";
import React from "react";
import { publicRoutes } from "../utils/router";

publicRoutes([
  {
    path: URLS.settings,
    component: React.lazy(() => import("./pages/SettingsPage")),
  },
]);
