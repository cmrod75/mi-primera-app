import { Component } from '@angular/core';
import { PersonaComponent } from '../persona/persona.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [PersonaComponent, FormsModule],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css',
})
export class PersonasComponent {
  deshabilitar = false;
  mensaje = 'No se ha agregado persona';
  titulo = 'Ingeniero';

  agregarPersona() {
    this.mensaje = 'Persona agregada';
  }

  modificarTitulo(event: Event) {
    this.titulo = (<HTMLInputElement>event.target).value;
  }
}
