import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styles: [`
  .highlight {
    background-color:blue;
  }`]
})
export class DataBidingComponent implements OnInit {

  url: string = 'Data biding types';
  cursoAngular: boolean = true;
  urlImagem: string = 'http://lorempixel.com.br/500/400/?1';
  valorAtual: any = '';
  valorSalvo: string = '';
  mouseOver: boolean = false;
  nomeCurso: string = 'Angular';
  valorInicial: number = 15;

  onMudouValor(evento: any){
    console.log(evento);
  }


  public getValor(){
    return 1;
  }

  public getCurtirCurso(){
    return true;

  }

  public onKeyUp(evento: KeyboardEvent){
    //console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  isMouseOver(){
    this.mouseOver = !this.mouseOver;

  }

  public salvarValor(valor: string){
    this.valorSalvo = valor;
  }

  botaoClick(){
    alert('Click');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
