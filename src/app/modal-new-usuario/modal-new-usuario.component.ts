import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IsVisibleService } from '../services/isVisible/is-visible.service';
import { ClienteService } from '../services/cliente/cliente.service';
import { FormsModule, NgModel } from '@angular/forms';
import { Cliente } from '../interfaces/cliente';

@Component({
  selector: 'app-modal-new-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-new-usuario.component.html',
  styleUrl: './modal-new-usuario.component.css'
})
export class ModalNewUsuarioComponent {
  isVisible:boolean=false;

  cliente:Cliente={
    sharedKey: "",
    businessId: "",
    email: "",
    phone: 0,
    startDate: new Date(),
    endDate: new Date(),
    dataAdded: new Date()
  };

  constructor(private isVisibleService:IsVisibleService, private clienteService:ClienteService){
    this.isVisibleService.visible$.subscribe(
      (value)=>(this.isVisible=value)
    )
  }

  generarSharedKey(nombreCliente:String):String{
    return (nombreCliente.split(" ")[0].substring(0,1)+nombreCliente.split(" ")[1]).toLowerCase();
  }

  guardarUsuario(){
    this.cliente.sharedKey = this.generarSharedKey(this.cliente.businessId);

    this.clienteService.guardarCliente(this.cliente).subscribe(
      () => {
        this.clienteService.obtenerClientes();    
      }
    );
    
    this.isVisible=false;

    
  }


}
