import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input()
  personajes: Personaje[] = [];

  @Input()
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
