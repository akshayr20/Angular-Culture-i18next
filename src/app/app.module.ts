import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { I18NextModule } from 'angular-i18next';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { I18N_PROVIDERS } from './i18nextConfig';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, I18NextModule.forRoot()],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [I18N_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
