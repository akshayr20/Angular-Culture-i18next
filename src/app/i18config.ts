import { ITranslationService, I18NEXT_SERVICE, I18NextModule, defaultInterpolationFormat } from 'angular-i18next';
import i18nextXHRBackend from "i18next-xhr-backend";
import i18nextLanguageDetector from "i18next-browser-languagedetector";
import { APP_INITIALIZER, LOCALE_ID } from '@angular/core';

export function appInit(i18next: ITranslationService) {
  return () =>
    i18next
      .use(i18nextXHRBackend)
      .use(i18nextLanguageDetector)
      .init({
        whitelist: ['en', 'el'],
        fallbackLng: 'en',
        debug: true,
        returnEmptyString: false,
        saveMissing: true,
        ns: [
          'translation'
        ],
        interpolation: {
          format: I18NextModule.interpolationFormat(defaultInterpolationFormat)
        },
        backend: {
          loadPath: 'assets/locales/{{lng}}.{{ns}}.json',
          // path to post missing resources
          // addPath: 'assets/locales/{{lng}}.{{ns}}.missing.json',
        },
        // lang detection plugin options
        detection: {
          // order and from where user language should be detected
          order: ['querystring', 'cookie'],

          // keys or params to lookup language from
          lookupCookie: 'lang',
          lookupQuerystring: 'lng',

          // cache user language on
          caches: ['localStorage', 'cookie'],

          // optional expire and domain for set cookie
          cookieMinutes: 10080, // 7 days
        }
      });
}

export function localeIdFactory(i18next: ITranslationService) {
  return i18next.language;
}

export const I18N_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true
  },
  {
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory
  }];
