import { Component, DoCheck, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.sass']
})
export class CicloComponent implements OnInit, DoCheck {

  @Input() valorInicial: number = 10;
  

  constructor() { 
    this.log('constructor');    
  }
  
  ngOnDestroy(){
    this.log('ngOnDestroy');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  private log(hook: string){
     console.log(hook);
  }

}
