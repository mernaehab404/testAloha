export const __DEV__ = import.meta.env.MODE === "development";
export const defaultLocaleCode = import.meta.env.APP_DEFAULT_LOCALE_CODE;
export const fallbackLocaleCode = import.meta.env.APP_DEFAULT_LOCALE_CODE;
export const appCode: string = import.meta.env.APP_CODE_NAME;
export const appName = import.meta.env.APP_NAME;
export const productionBasePath = import.meta.env.APP_PRODUCTION_BASE_PATH;
export const apiOS = import.meta.env.APP_API_OS;
export const appVersion = import.meta.env.APP_VERSION;
export const apiBaseUrl = import.meta.env.APP_API_URL;
export const googleMapApiKey = import.meta.env.APP_GOOGLE_MAP_API_KEY;
import logo from "assets/images/logo.png";

export { logo };
