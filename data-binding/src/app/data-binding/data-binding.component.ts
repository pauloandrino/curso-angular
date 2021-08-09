import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://lorraine.com';
  cursoAngular: boolean = true;
  urlImagem = 'https://lorempixel.com/400/200/nature';
  valorAtual: string = '';
  valorSalvo = '';
  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial = 15;


  getValor() {
    return 1;
  }

  getCursoAngular() {
    return true;
  }

  botaoClicado() {
    alert("Botão clicado");
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }


  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }


  onMudouValor(evento: Event) {
    console.log(evento);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
