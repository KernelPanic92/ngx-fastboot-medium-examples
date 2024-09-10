import * as Sentry from "@sentry/angular";
import { Provider, EnvironmentProviders, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { Router } from "@angular/router";

export default [
  {
    provide: ErrorHandler,
    useValue: Sentry.createErrorHandler(),
  },
  {
    provide: Sentry.TraceService,
    deps: [Router],
  },
  {
    provide: APP_INITIALIZER,
    useFactory: () => () => {},
    deps: [Sentry.TraceService],
    multi: true,
  },
] satisfies Array<Provider | EnvironmentProviders>;
