import { Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';

@Component({
  selector: 'app-output-properties',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.sass']
})
export class OutputPropertiesComponent implements OnInit {

  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter();

  //@ViewChild('campoInput') campoValorInput = new HTMLElement;
  

  incrementaValor(){
   // console.log(this.campoValorInput);
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementaValor(){
    this.valor--;    
    this.mudouValor.emit({
      novoValor: this.valor
    }); 
  }



  constructor() { }

  ngOnInit(): void {
  }

}
