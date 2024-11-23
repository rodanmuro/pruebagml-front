import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IsVisibleService } from '../is-visible.service';

@Component({
  selector: 'app-modal-new-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-new-usuario.component.html',
  styleUrl: './modal-new-usuario.component.css'
})
export class ModalNewUsuarioComponent {
  isVisible:boolean=false;

  constructor(private isVisibleService:IsVisibleService){
    this.isVisibleService.visible$.subscribe(
      (value)=>(this.isVisible=value)
    )
  }

  guardarUsuario(){
    this.isVisible=false;
  }


}
