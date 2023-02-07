import { Component } from '@angular/core'; // Tenemos una importacion del decorador componente que viene de angular/core

//  Este decorador requiere un objeto con algunas propiedades: 
@Component({ 
  selector: 'app-root', // Nombre que el componente va a tener
  templateUrl: './app.component.html', // Html del componente. Puede ser una ruta como aca o escribir el html directamente. Como en contador.component.ts
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'bases' // Se especifica como public para que sea mas facil de leer.
}
