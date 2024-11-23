import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalNewUsuarioComponent } from './modal-new-usuario/modal-new-usuario.component';
import { IsVisibleService } from './services/isVisible/is-visible.service';
import { ApiService } from './services/api/api.service';
import { NgFor } from '@angular/common';
import { ClienteService } from './services/cliente/cliente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalNewUsuarioComponent, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'pruebagml-front';
  clientes:any[]=[];
  sharedKey:string = "";

  constructor(private isVisibleService:IsVisibleService, private clienteService:ClienteService){

  }

  ngOnInit(): void {
    this.clienteService.clientes$.subscribe(
      (data) => {
        this.clientes = data;
      }
    );

    this.clienteService.obtenerClientes();
  }

  mostrarModal(value:boolean){
    this.isVisibleService.setVisibility(value);
  }

  obtenerClientesBySharedKey(){
    if(this.sharedKey==="" || this.sharedKey === undefined || this.sharedKey === null){
      this.clienteService.obtenerClientes()
    }else{
      this.clienteService.obtenerClientesBySharedKey(this.sharedKey);
    }
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.onEscapeKey);
  }

  
  @HostListener('document:keydown', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.isVisibleService.setVisibility(false);
    }
  }
}
