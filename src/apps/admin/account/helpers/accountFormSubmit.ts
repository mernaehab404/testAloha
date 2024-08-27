import { trans } from "@mongez/localization";
import { catchError, toastSuccess } from "@mongez/moonlight";
import { navigateBack, navigateTo } from "@mongez/react-router";
import user from "user";
import URLS from "../../utils/urls";
import { forgetPasswordAtom } from "../atom/forget-password-atom";
import { forgetPassword, login, resetPassword } from "../service/auth";

// Handling Login page form...
export const performLogin = ({ values, form }) => {
  login(values)
    .then(response => {
      user.login({
        accessToken: response.data.token,
        ...response.data.record,
      });
      navigateBack();
      toastSuccess("Login Success");
    })
    .catch(error => {
      form.submitting(false);
      console.log(error);

      catchError(error);
    });
};

// Handling Logout page form...
export const performLogout = () => {
  user.logout();
  navigateTo(URLS.login);
  toastSuccess(trans("logoutSuccessMessage"));
};

// Handling forgot password form submit...
export const forgotPasswordSubmit = ({ values, form }) => {
  forgetPassword(values)
    .then(() => {
      forgetPasswordAtom.change("email", form.value("email"));
      setTimeout(() => {
        navigateTo(URLS.resetPassword);
      }, 0);
    })
    .catch(error => {
      form.submitting(false);
      catchError(error);
    });
};

// Handling Reset password form...
export const resetFormSubmit = ({ values, form }) => {
  resetPassword(values)
    .then(() => {
      toastSuccess("Success");
      navigateTo(URLS.login);
    })
    .catch(error => {
      form.submitting(false);
      catchError(error);
    });
};
