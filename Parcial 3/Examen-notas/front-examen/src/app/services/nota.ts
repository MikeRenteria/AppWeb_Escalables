import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Nota {
  _id?: string;
  titulo: string;
  contenido: string;
}

@Injectable({ providedIn: 'root' })
export class NotaService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:3000/api/notas';

  // Señal que guarda el arreglo de notas
  notas = signal<Nota[]>([]);

  cargarNotas() {
    this.http.get<Nota[]>(this.apiUrl).subscribe(datos => {
      this.notas.set(datos);
    });
  }

  // esperamos la respuesta del servidor y solo entonces agregamos la nota a la señal
  agregarNota(nuevaNota: Nota) {
    this.http.post<Nota>(this.apiUrl, nuevaNota).subscribe(notaGuardada => {
      this.notas.update(lista => [...lista, notaGuardada]);
    });
  }
}