import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiClientesService {

  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  // Método GET para obtener los usuarios
  getUsers(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  


}
