import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalNewUsuarioComponent } from './modal-new-usuario/modal-new-usuario.component';
import { IsVisibleService } from './is-visible.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModalNewUsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pruebagml-front';

  constructor(private isVisibleService:IsVisibleService){

  }

  mostrarModal(value:boolean){
    this.isVisibleService.setVisibility(value);
  }
}
