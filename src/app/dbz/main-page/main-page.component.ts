import { Component } from '@angular/core';

interface Personaje{
  nombre: string;
  poder: number;
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
      poder: 14000
    },
    {
      nombre: 'Vegueta',
      poder: 9500
    }
  ]

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregar(){
    // console.log("Evento de formulario "+this.nuevo.nombre+" - "+this.nuevo.poder);
    if(this.nuevo.nombre.trim().length === 0){ return; }
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre : '',
      poder : 0
    }
  }
}
