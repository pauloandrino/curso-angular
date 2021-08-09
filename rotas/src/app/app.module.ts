import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatListModule} from "@angular/material/list";
import {AppRoutingModule} from "./app.routing.module";
import {AuthService} from "./login/auth.service";
import {FormsModule} from "@angular/forms";
import {AuthGuard} from "./guards/auth-guard";
import {CursosGuard} from "./guards/cursos.guard";
import {AlunosGuard} from "./guards/alunos.guard";
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaginaNaoEncontradaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    MatIconModule, MatToolbarModule, MatCardModule, MatButtonModule, MatCardModule,
    MatInputModule, MatFormFieldModule, MatListModule,
    AppRoutingModule, FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    CursosGuard,
    AlunosGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
