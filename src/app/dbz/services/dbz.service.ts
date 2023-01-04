import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService{

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 14000
    },
    {
      nombre: 'Vegueta',
      poder: 9500
    }
  ]

  get personajes(): Personaje[] {
    return [...this._personajes];
  }

  constructor(){
    console.log("Servicio incializado");
  }
}
