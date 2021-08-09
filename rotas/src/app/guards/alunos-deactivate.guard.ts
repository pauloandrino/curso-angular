import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AlunoFormComponent} from "../alunos/aluno-form/aluno-form.component";
import {IFormCandeactivate} from "./iform-candeactivate";

export class AlunosDeactivateGuard implements CanDeactivate<IFormCandeactivate> {


  canDeactivate(
    component: IFormCandeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('Guarda de desativação')


    // return component.podeMudarRota();

    return component.podeDesativar();
  }

}
