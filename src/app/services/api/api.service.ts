import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http:HttpClient) { }

  obtenerClientesBySharedKey(sharedKey:string):Observable<any>{
    return this.http.get(this.apiUrl+"/cliente"+"/"+sharedKey)
  }

  obtenerClientes():Observable<any>{
    return this.http.get(this.apiUrl+"/cliente");
  }

  guardarCliente(cliente:object):Observable<object>{
    return this.http.post(this.apiUrl+"/cliente", cliente);
  }
}
