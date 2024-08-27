import { guardedRoutes } from "app/utils/router";
import URLS from "app/utils/urls";
import React from "react";

guardedRoutes([
  {
    path: URLS.contactUs,
    component: React.lazy(() => import("./pages/ContactUsPage")),
  },
]);
