import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  marcar: string;

  nome: string;
  idade: number;

  pessoas: any[] = [
    { nome: 'José', idade: 23 },
    { nome: 'Marcos', idade: 10 },
    { nome: 'Lucas', idade: 5 },
  ];

  constructor() {}

  ngOnInit(): void {}

  adicionar() {
    this.pessoas.push({ nome: this.nome, idade: this.idade });
    this.nome = null;
    this.idade = null;
  }

  remover(index) {
    this.pessoas.splice(index, 1);
  }
}
