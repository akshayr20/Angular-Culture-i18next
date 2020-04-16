import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { cultureInit } from 'culture-i18n';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import './base-components';

cultureInit({
  debug: true,
  fallbackLng: 'en',
  ns: ['translation', 'error', 'validation'],
  url: 'assets/locales/{{lng}}.{{ns}}.json',
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
