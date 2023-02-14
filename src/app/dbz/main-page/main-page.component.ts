import { Component } from '@angular/core';

interface Personaje{
  nombre: string,
  poder: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

  /*
  Forma tradicional 1**
  agregar(event: any){
    event.preventDefault(); -> Prevee el comportamiento por defecto que tiene el formulario.
    console.log('Esta es una prueba')
  }
  
  La forma en angula es la que estamos usando ahora. Observar que ademas de los cambios en el html y ts, importamos un modulo llamado FormsModule para que podamos hacer todo esto.

  agregar(){
    console.log('Esta es una prueba')
  }
*/

  nuevo: Personaje = { // Se creo arriba una interfaz para esto.
    nombre: '',
    poder: 0
  }

  agregar(){
    if( this.nuevo.nombre.trim().length === 0 ) return;
    console.log(this.nuevo); // {nombre: 'Trunks', poder: 14000}
  }

  cambiarNombre(event: any){
    console.log(event.target.value)
  }


}
