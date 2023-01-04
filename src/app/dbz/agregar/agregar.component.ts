import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  // @Input() // YA no va por que va a ser un output y va interactura con el padre
  // personajes: Personaje[] = [];

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: DbzService){}

  /*
  @Output()
  onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();*/

  agregar(){
    // console.log("Evento de formulario "+this.nuevo.nombre+" - "+this.nuevo.poder);
    if(this.nuevo.nombre.trim().length === 0){ return; }

    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);

    // this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre : '',
      poder : 0
    }
  }
}
