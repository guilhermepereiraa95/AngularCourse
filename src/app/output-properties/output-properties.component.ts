import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-output-properties',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.sass']
})
export class OutputPropertiesComponent implements OnInit {

  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter();

  incrementaValor(){
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
