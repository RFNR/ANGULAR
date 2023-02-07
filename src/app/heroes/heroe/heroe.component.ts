import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

    nombre: string = 'IronMan';
    edad: number = 35;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase()
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`
    }

    cambiarHeroe(): void{
        this.nombre = 'Spiderman';

    }
    
    cambiarEdad(): void{
        this.edad = 45;
    }

}