import Endpoint, { setCurrentEndpoint } from "@mongez/http";
import { navigateTo } from "@mongez/react-router";
import URLS from "app/utils/urls";
import { settingsAtom } from "apps/admin/settings/atoms";
import user from "user";
import { apiBaseUrl } from "./flags";

const endpoint = new Endpoint({
  putToPost: false,
  baseURL: apiBaseUrl,
  setAuthorizationHeader: () => {
    if (user.isLoggedIn()) {
      return `Bearer ${user.getAccessToken()}`;
    }
  },
});

const endpointEvents = endpoint.events;

endpointEvents.beforeSending(config => {
  // const headers: any = config.headers;
});

endpointEvents.onSuccess(response => {
  if (response.data.user) {
    user.login(response.data.user);
  }
});

endpointEvents.onComplete(response => {
  // if (response?.data?.data) {
  //   response.data = response.data.data;
  // }

  if (response?.data?.settings) {
    settingsAtom.update(response.data.settings);
  }
});

endpointEvents.onError(response => {
  if (response?.status === 401) {
    user.logout();
    navigateTo(URLS.login);
  }
});

setCurrentEndpoint(endpoint);

export default endpoint;
