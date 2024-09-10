import { EnvironmentProviders, Provider, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "../app.routes";

export default [
  provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes),
] satisfies Array<Provider | EnvironmentProviders>;
