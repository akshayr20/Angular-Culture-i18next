import { Injectable } from '@angular/core';
import en from '../../resources/en.json';
import de from '../../resources/de.json';
import ru from '../../resources/ru.json';

@Injectable({
  providedIn: 'root',
})
export class FetchResourcesService {
  items = [
    {
      optionGroup: [
        {
          label: 'English',
          value: 'en',
        },
        {
          label: 'Russian',
          value: 'ru',
        },
        {
          label: 'German',
          value: 'de',
        },
      ],
    },
  ];
  constructor() {}

  async mockBackEnd(lang) {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        let resources;
        switch (lang) {
          case 'en':
            resources = en;
            break;
          case 'de':
            resources = de;
            break;
          case 'ru':
            resources = ru;
            break;
          default:
            resources = en;
            break;
        }
        resolve(resources);
      }, 500);
    });
    return promise;
  }
}
