import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http:HttpClient) {

  }

  buscar(contiente:string):Observable<Pais[]> {

  }


}
