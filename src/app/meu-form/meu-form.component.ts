import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.sass']
})
export class MeuFormComponent implements OnInit {

  
  
  valor: string = 'abc';
  
  pessoa: any = {
    nome: 'gui',
    idade: 25
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
