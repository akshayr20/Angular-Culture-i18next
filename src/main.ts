import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { cultureInit } from 'culture-i18n';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import '@bit/orxe_3.base.button';
import '@bit/orxe_3.base.dropdown';
import '@bit/orxe_3.base.counter';

cultureInit({
  debug: false,
  fallbackLng: 'en',
  ns: ['translation', 'error', 'validation'],
  url:
    'https://raw.githubusercontent.com/akshayr20/Angular-Culture-i18next/master/src/assets/locales/{{lng}}.{{ns}}.json'
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
