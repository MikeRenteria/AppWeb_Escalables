import { Component, input, output, signal, WritableSignal } from '@angular/core';
import { User } from '../../interfaces/user.interface'

@Component({
  imports: [],
  selector: 'app-user-card',
  styleUrl: './user-card.css',
  templateUrl: './user-card.html',
})
export class UserCard {
  user = input.required<User>();

  //funciones para la eliminacion donde la primera manda un output con el numero id del usuario a eliminar y en la segunda
  //al darle al boton de eliminar segun sea la carta le mandara el id a la primera funcion.
  
  //Esta es la primera funcion
  deleteUser = output<number>();

  //Esta es la segunda funcion
  onDelete(): void{
    this.deleteUser.emit(this.user().id);
  }
}
