//no hay pierde para el notas.ts
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotaService } from '../../services/nota';

@Component({
  selector: 'app-notas',
  imports: [FormsModule],
  templateUrl: './notas.html',
  styleUrl: './notas.css'
})
export class NotasComponent implements OnInit {
  notaService = inject(NotaService);

  titulo = '';
  contenido = '';

  ngOnInit() {
    this.notaService.cargarNotas();
  }

  guardar() {
    if (!this.titulo.trim() || !this.contenido.trim()) return;

    this.notaService.agregarNota({
      titulo: this.titulo,
      contenido: this.contenido
    });

    this.titulo = '';
    this.contenido = '';
  }
}