import { Component, Inject, OnInit } from '@angular/core';
import { ITranslationService, I18NEXT_SERVICE } from 'angular-i18next';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
    @Inject(I18NEXT_SERVICE) public i18NextService: ITranslationService
  ) {}

  ngOnInit() {
    this.i18NextService.events.initialized.subscribe((e) => {
      if (e) {
        this.updateState(this.i18NextService.language);
      }
    });
  }

  changeLanguage({ detail }) {
    if (!detail.value) {
      return;
    }
    const lang = detail.value;
    // if the same lang is selected, do not reset the lang
    if (lang !== this.i18NextService.language) {
      this.i18NextService.changeLanguage(lang).then((x) => {
        this.updateState(lang);
        document.location.reload();
      });
    }
  }

  private updateState(lang: string) {
    this.language = lang;
  }
}
