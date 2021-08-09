import {ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "../login/auth.service";

@Injectable()
export class AlunosGuard implements CanActivateChild {

  constructor(private authServcice: AuthService, private router: Router) { }

    canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // console.log(childRoute);
    // console.log(state);
    console.log('Alunos guard: Guarda de rota filha');

    if (state.url.includes('editar')) {
      // alert('Usuário não tem acesso')
      // return false;
    }

    return true;
  }

}
