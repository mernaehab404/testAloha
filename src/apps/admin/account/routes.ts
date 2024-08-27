import { reverseGuardedRoutes } from "../utils/router";
import URLS from "../utils/urls";
import ForgotPasswordPage from "./pages/ForgotPassword";
import LoginPage from "./pages/LoginPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

reverseGuardedRoutes([
  {
    path: URLS.login,
    component: LoginPage,
  },
  {
    path: URLS.forgotPassword,
    component: ForgotPasswordPage,
  },
  {
    path: URLS.resetPassword,
    component: ResetPasswordPage,
  },
]);
