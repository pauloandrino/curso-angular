import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ExemplosPipesComponent} from './exemplos-pipes/exemplos-pipes.component';
import {CamelCasePipe} from './camel-case.pipe';
import {SettingsService} from "./settings.service";
import { FiltroArrayPipe } from './filtro-array.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    /*
    {
      provide: LOCALE_ID,
      useValue: "en-US"
    }
    */
    SettingsService, {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService: { getLocale: () => any; }) => settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
