// tslint:disable: curly
import { Component, Inject, OnInit } from '@angular/core';
import { ITranslationService, I18NEXT_SERVICE } from 'angular-i18next';
import { FetchResourcesService } from './services/fetch-resources.service';
import { addResourceBundle } from 'culture-i18n';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(I18NEXT_SERVICE) public i18NextService: ITranslationService,
    public cr: FetchResourcesService
  ) {}

  ngOnInit() {}

  async changeLanguage({ detail }) {
    if (!detail.value) return;
    const lang = detail.value;
    await this.addResources(lang);
    this.i18NextService.changeLanguage(lang);
  }

  private async addResources(lang: string) {
    // tslint:disable-next-line: no-shadowed-variable
    const resources = await this.cr.mockBackEnd(lang);
    const resourceConfig = { lang, resources };
    addResourceBundle(resourceConfig);
  }
}
