import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalNewUsuarioComponent } from './modal-new-usuario/modal-new-usuario.component';
import { IsVisibleService } from './is-visible.service';
import { ApiService } from './api.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalNewUsuarioComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'pruebagml-front';
  clientes:any[]=[];

  constructor(private isVisibleService:IsVisibleService, private apiService:ApiService){

  }

  ngOnInit(): void {
    this.apiService.obtenerClientes().subscribe(
      {
        next:(data)=>{
          this.clientes=data
        }
      }
    );
  }

  mostrarModal(value:boolean){
    this.isVisibleService.setVisibility(value);
  }
}
