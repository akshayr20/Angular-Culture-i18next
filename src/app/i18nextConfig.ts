import { Title } from '@angular/platform-browser';
import { APP_INITIALIZER, LOCALE_ID } from '@angular/core';

import {
  ITranslationService,
  I18NEXT_SERVICE,
  I18NextTitle,
} from 'angular-i18next';

import { i18NextInit } from 'culture-i18n';

function appInit() {
  return () => i18NextInit();
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
