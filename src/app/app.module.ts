import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { I18NextModule } from 'angular-i18next';
import { I18N_PROVIDERS } from './i18config';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    I18NextModule.forRoot()
  ],
  providers: [I18N_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
