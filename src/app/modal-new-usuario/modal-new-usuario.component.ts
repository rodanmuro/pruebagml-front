import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IsVisibleService } from '../is-visible.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-modal-new-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-new-usuario.component.html',
  styleUrl: './modal-new-usuario.component.css'
})
export class ModalNewUsuarioComponent {
  isVisible:boolean=false;

  constructor(private isVisibleService:IsVisibleService, private apiService:ApiService){
    this.isVisibleService.visible$.subscribe(
      (value)=>(this.isVisible=value)
    )
  }

  guardarUsuario(){

    
    

    const cliente = {
      sharedKey:"rodanmuro",
      email:"rodanmuro@gmail.com",
      phone:3156332247,
      startDate:"2024-01-01",
      endDate:"2024-01-01",
      dataAdded:"2024-01-01"
    };

    this.apiService.guardarCliente(cliente).subscribe();

    this.isVisible=false;
  }


}
