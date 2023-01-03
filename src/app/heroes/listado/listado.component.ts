import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ["Spiderman", "Batman", "Hulk", "Ironman", "Regalito"];
  heroeBorrado:string = '';

  borrarHeroe(){
    // this.heroes.slice(index);
    // delete this.heroes[index];
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
