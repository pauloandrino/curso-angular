import {Component, OnDestroy, OnInit} from '@angular/core';
import {CursosService} from "./cursos.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos: any[] = [];
  pagina: number = 0;
  subscription = new Subscription();

  constructor(private cursosService: CursosService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    this.subscription = this.route.queryParams.subscribe((queryParams: any) => {
      this.pagina = queryParams['pagina'];
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  proxPagina() {
    // this.pagina++
    this.router.navigate(['/cursos'],
      {queryParams: {'pagina': ++this.pagina}});
  }
}
