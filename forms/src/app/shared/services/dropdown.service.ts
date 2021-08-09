import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, pipe} from "rxjs";
import {EstadoBr} from "../models/estado-br";
import {Cidade} from "../models/cidade";
import {filter, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) {
  }
/*
  getEstadosBrasileiros(): Observable<EstadoBr[]> {
    return this.http.get('assets/dados/estadosbr.json') as Observable<EstadoBr[]>;
  }*/

  getEstadosBrasileiros() {
    return this.http.get<EstadoBr[]>('assets/dados/estadosbr.json');
  }

  getCidades(idEstado: number) {
    return this.http.get('assets/dados/cidades.json')
    .pipe(
      map((cidades: any) => cidades.filter((c: Cidade) => c.estado == idEstado))
    );
  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' }
    ]
  }

  getTecnologias() {
    return [
      {nome: 'java', desc: 'Java'},
      {nome: 'javascript', desc: 'JavaScript'},
      {nome: 'php', desc: 'PHP'},
      {nome: 'ruby', desc: 'Ruby'}
    ]
  }

  getNewsLetter() {
    return [
      {valor: 'S', desc: "Sim"},
      {valor: 'N', desc: "Não"}
    ]
  }
}
