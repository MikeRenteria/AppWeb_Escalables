import { Component, output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-controls',
  styleUrl: './controls.css',
  templateUrl: './controls.html',
})
export class Controls {

  searchControl  = new FormControl(""); 

  orderByIdClick = output<void>();
  orderByNameClick = output<void>();
  reverse = output<void>();
  search = output<string>();

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

  onSearch(): void{
    this.search.emit(this.searchControl.value ?? "");
  }

}
