import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {AlunosComponent} from "./alunos.component";
import {AlunoFormComponent} from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import {AlunosRoutingModule} from "./alunos.routing.module";
import {AlunosService} from "./alunos.service";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {AlunosDeactivateGuard} from "../guards/alunos-deactivate.guard";
import {AlunoDetalheResolver} from "./guards/alunos-detalhe.resolver";

@NgModule({
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [],
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent],
  providers: [AlunosService, AlunosDeactivateGuard, AlunoDetalheResolver]
})
export class AlunosModule {
}
