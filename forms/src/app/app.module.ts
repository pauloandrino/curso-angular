import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {setTheme} from "ngx-bootstrap/utils";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TemplateFormModule} from "./template-form/template-form.module";
import {HttpClientModule} from "@angular/common/http";
import {DataFormModule} from "./data-form/data-form.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TemplateFormModule,
    DataFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    setTheme('bs4');
  }
}
