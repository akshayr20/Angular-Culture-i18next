import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { I18N_PROVIDERS, setNameSpace, setResourceUrl } from 'culture-i18n';
import { I18NextModule } from 'angular-i18next';

setNameSpace(['translation', 'error', 'validation']);
setResourceUrl('assets/locales/{{lng}}.{{ns}}.json');

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, I18NextModule.forRoot()],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [I18N_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
