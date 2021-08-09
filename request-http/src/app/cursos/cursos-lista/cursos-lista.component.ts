import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Curso} from "../curso";
import {catchError} from "rxjs/operators";
import {empty, Observable, Subject} from "rxjs";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {AlertModelService} from "../../shared/alert-model.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Cursos2Service} from "../cursos2.service";

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {
  cursos$: Observable<Curso[]> = new Observable<Curso[]>();
  error$ = new Subject<boolean>();

  deleteModalRef: BsModalRef = new BsModalRef<any>();

  @ViewChild('deleteModal')
  deleteModal!: TemplateRef<any>;

  cursoSelecionado: Curso = {id: 0, nome: ''};

  constructor(
    private modalService: BsModalService,
    private service: Cursos2Service,
    private alertService: AlertModelService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {

    /*
    this.service.list()
      .subscribe(dados => this.cursos = dados);
    */

    this.onRefresh();

  }

  onRefresh() {
    this.cursos$ = this.service.list()
      .pipe(
        catchError(error => {
          console.error(error);
          // this.error$.next(true)
          this.handleError()
          return empty()
        })
      );

    /*
    this.service.list().subscribe(
      dados => console.log(dados),
      error => console.log(error),
      () => console.log('Observable completo!')
    )
    */


    /*
    this.service.list()
      .pipe(
        catchError(err => empty())
      )
      .subscribe(
      dados => console.log(dados)
    )
    */
  }

  handleError() {
    this.alertService.showAlertDanger("Erro ao carregar cursos. Tente novamente mais tarde.")
  }

  onEdit(id: number) {
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }

  onDelete(curso: Curso) {
    this.cursoSelecionado = curso;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});
  }

  onConfirmDelete() {
    this.service.remove(this.cursoSelecionado.id).subscribe(
      success => {
        this.onRefresh();
        this.deleteModalRef.hide();
      },
      error => {
        this.alertService.showAlertDanger('Erro ao remover curso. Tente novamente mais tarde.');
        this.deleteModalRef.hide();
      }
    )
  }

  onDeclineDelete() {
    this.deleteModalRef.hide();
  }
}
