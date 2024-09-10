import { BuscadorService } from './../../service/buscador.service';
import { Component } from '@angular/core';
import { Resultado } from '../../model/Resultado';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

  constructor(private buscadorService:BuscadorService){

  }

  tematica:string;
  resultado:Resultado[]; // Aquí guardaremos los resultados de la búsqueda
  buscar():void{
    // hay que llamar al método del service y guardarlo en una variable
    this.resultado=this.buscadorService.buscar(this.tematica);
  }
}
