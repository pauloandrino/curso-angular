import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {CursosComponent} from "./cursos.component";
import {CursoDetalheComponent} from "./curso-detalhe/curso-detalhe.component";
import {CursoNaoEncontradoComponent} from "./curso-nao-encontrado/curso-nao-encontrado.component";
import {CursosService} from "./cursos.service";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatListModule} from "@angular/material/list";
import {CursosRoutingModule} from "./cursos.routing.module";

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule,

    MatIconModule, MatToolbarModule, MatCardModule, MatButtonModule, MatCardModule,
    MatInputModule, MatFormFieldModule, MatListModule

  ],
  exports: [],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  providers: [CursosService]
})
export class CursosModule {}

