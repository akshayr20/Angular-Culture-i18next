import { Title } from '@angular/platform-browser';
import { APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { environment } from '../environments/environment';

import {
  ITranslationService,
  I18NEXT_SERVICE,
  I18NextTitle,
} from 'angular-i18next';

import { i18NextInit, i18next, cultureConfigInit } from 'culture-i18n';

import translation from '../resources/en.json';

const resources = { 'en-US': { translation } };

i18next.on('initialized', () => {
  console.log(i18next);
});

i18next.on('loaded', () => {
  console.log('loaded');
});

cultureConfigInit({
  debug: false,
});

function appInit(i18next: ITranslationService) {
  return () =>
    i18NextInit(
      { production: environment.production, resources, url: 'en-US' },
      i18next
    );
}

function localeIdFactory(i18next: ITranslationService) {
  return i18next.language;
}

export const I18N_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true,
  },
  {
    provide: Title,
    useClass: I18NextTitle,
  },
  {
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory,
  },
];
