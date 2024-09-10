import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { Provider, EnvironmentProviders } from '@angular/core';

export default [
  provideFirebaseApp(() => initializeApp({})),
  provideFirestore(() => getFirestore()),
  provideAnalytics(() => getAnalytics()),
  provideAuth(() => getAuth()),
  provideFunctions(() => getFunctions()),
  provideMessaging(() => getMessaging()),
  provideStorage(() => getStorage()),
  providePerformance(() => getPerformance()),
  provideRemoteConfig(() => getRemoteConfig()),
] satisfies Array<Provider | EnvironmentProviders>;
