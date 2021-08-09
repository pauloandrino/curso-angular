import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'JavaScript Data Structures and Algorithms: An Introduction to Understanding and Implementing Core Data Structure and Algorithm Fundamentals',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 45.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://www.amazon.com/dp/1484239873/ref=cm_sw_em_r_mt_dp_C2J0GKQ4Y7214N5HYG30'
  }

  livros: string[] = ['JAVA', 'Angular']

  constructor() { }

  ngOnInit(): void {
  }

}
