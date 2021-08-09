import {Injectable, EventEmitter} from "@angular/core";
import {LogService} from "../shared/log.service";

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criarNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular', 'Java', 'HTML'];

  constructor(private logService: LogService) {
    console.log('CursoService')
  }

  getCursos() {
    this.logService.consoleLog('Obtendo lista de cursos');
    return this.cursos;

  }

  addCurso(curso: string) {
    this.logService.consoleLog(`Criando um novo curso ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criarNovoCurso.emit(curso);
  }
}
