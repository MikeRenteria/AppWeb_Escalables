import { Component, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-controls',
  styleUrl: './controls.css',
  templateUrl: './controls.html',
})
export class Controls {
  orderByIdClick = output<void>();
  orderByNameClick = output<void>();
  reverse = output<void>();

  onOrderByIdClick(): void {
    //console.log("Evento en el hijo");
    this.orderByIdClick.emit();
  }

  onOrderByNameClick(): void{
    this.orderByNameClick.emit()
  }

  onReverseClick(): void{
    this.reverse.emit();
  }

}
