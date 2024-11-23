import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientesSubject:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public clientes$:Observable<any[]> = this.clientesSubject.asObservable();

  constructor(private apiService:ApiService) { }

  guardarCliente(cliente:object):Observable<object>{
    return this.apiService.guardarCliente(cliente);
  }

  obtenerClientes():void {
    this.apiService.obtenerClientes().subscribe(
      {
        next:(data) => {
          this.clientesSubject.next(data)
        },
        error:(error) => {
          alert("Error obteniendo los clientes")
        }
      }
    )
  }

  obtenerClientesBySharedKey(sharedKey:string):void{
    this.apiService.obtenerClientesBySharedKey(sharedKey).subscribe(
      {
        next:(data) => {
          this.clientesSubject.next(data)
        },
        error:(error)=>{
          alert("Error obteniendo los clientes");
        }
      }
    )
  }

}
