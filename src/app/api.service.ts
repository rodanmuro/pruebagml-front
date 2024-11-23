import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http:HttpClient) { }

  guardarCliente(cliente:any):Observable<any>{
    console.log("guardar");
    return this.http.post(this.apiUrl+"/cliente", cliente);
  }
}
