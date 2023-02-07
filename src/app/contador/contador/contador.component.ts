import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
      <h1>{{ titulo }}</h1>

      <h3>La base es: <strong> {{base}} </strong></h3>

      <button (click)="acumular(base)"> +{{base}} </button> <!-- No se puede poner numero++ o numero += 1-->
      <span> {{ numero }} </span>
      <button (click)="acumular(-base)"> -{{base}} </button>
      <button (click)="numero = 0"> Reset </button>
    `
})

export class ContadorComponent {

  titulo: string = 'Contador App';

  numero: number = 10;
    
  base:number = 5;
  
  restar(){
    --this.numero;
  }
  
  acumular(valor: number){

    this.numero += valor;
    
  }
    
}