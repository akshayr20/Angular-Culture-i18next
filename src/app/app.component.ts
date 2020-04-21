// tslint:disable: curly
import {
  Component,
  Inject,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ITranslationService, I18NEXT_SERVICE } from 'angular-i18next';

import { de, en, ru } from './resources';

async function mockBackEnd(lang) {
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = '';
  language = 'en';
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

  constructor(
    @Inject(I18NEXT_SERVICE) public i18NextService: ITranslationService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.i18NextService.events.initialized.subscribe((e) => {
      const resources = en;
      const lang = 'en';
      this.i18NextService.addResourceBundle(
        `${lang}`,
        'translation',
        resources,
        true,
        true
      );
      if (e) {
        this.updateState(this.i18NextService.language);
      }
    });
  }

  async changeLanguage({ detail }) {
    if (!detail.value) return;
    const lang = detail.value;
    await this.addResources(lang);
    this.i18NextService.changeLanguage(lang);
  }

  private async addResources(lang: any) {
    const resources = await mockBackEnd(lang);
    this.i18NextService.addResourceBundle(
      `${lang}`,
      'translation',
      resources,
      true,
      true
    );
    this.updateState(lang);
  }

  private updateState(lang: string) {
    this.language = lang;
    this.ref.detectChanges();
  }
}
