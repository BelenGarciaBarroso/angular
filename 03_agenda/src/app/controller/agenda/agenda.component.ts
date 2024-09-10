import { Component } from '@angular/core';
import { Contacto } from '../../model/Contacto';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  // Almacena los contactos creados
  agenda:Contacto[]=[]; // Hay que inicializar para que se vayan guardando los datos
  // estas variables se vinculan con los campos de texto para recoger
  // la e entrada de usuario
  nombre:string;
  edad:number;
  telefono:string;

  // Respuesta al evento guardar
  guardar():void{
    this.agenda.push(new Contacto(this.nombre,this.edad,this.telefono));
  }
}
