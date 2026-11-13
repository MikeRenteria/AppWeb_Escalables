import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotasComponent } from './components/notas/notas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NotasComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front-examen');
}
