import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  mudarValor(){
    this.valor++;
  }

  valor: number = 5;
  deletarCiclo: boolean = false;
  
  destruirCiclo(){
    this.deletarCiclo = true;
  }

}
