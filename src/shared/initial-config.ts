import {
  EncryptedLocalStorageDriver,
  PlainLocalStorageDriver,
  setCacheConfigurations,
} from "@mongez/cache";
import {
  decrypt,
  encrypt,
  setEncryptionConfigurations,
} from "@mongez/encryption";
import { setPreloadConfiguration } from "@mongez/react-utils";
import { AES } from "crypto-js";
import LoadingErrorHandler from "design-system/components/Indicators/LoadingErrorHandler";
import { __DEV__, appCode } from "./flags";

const cacheDriver = __DEV__
  ? new PlainLocalStorageDriver()
  : new EncryptedLocalStorageDriver();

setPreloadConfiguration({
  loadingErrorComponent: LoadingErrorHandler,
});

setEncryptionConfigurations({
  key: appCode,
  driver: AES,
});

setCacheConfigurations({
  prefix: appCode,
  driver: cacheDriver,
  encryption: {
    encrypt,
    decrypt,
  },
});
