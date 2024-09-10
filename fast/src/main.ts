import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { fast } from 'ngx-fastboot';

fast(bootstrapApplication, AppComponent, appConfig)
  .then(() => import('./sentry.init'))
  .then(module => module.init())
  .catch((err) => console.error(err));
