import { FastApplicationConfig } from "ngx-fastboot";

export const appConfig: FastApplicationConfig = {
  providers: [
    () => import('./configs/core.config'),
    () => import('./configs/sentry.config'),
    () => import('./configs/firebase.config'),
  ]
};
