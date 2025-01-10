import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  task:String = "";
  isActive:boolean = true;
  lista: String[] = ["primero", "segundo"];
  terminadas: String[] = ["tercero"];
  
  eliminar(posi: number){
    this.lista.splice(posi, 1);
  }
  eliminarter(posi: number){
    this.terminadas.splice(posi, 1);
    if(this.terminadas.length == 0){
      this.isActive = false
    }
  }
  agregar(){
    this.lista.push(this.task);
    this.task = "";
  }
  completadas(posi: number){
    this.terminadas.push(this.lista[posi]);
    this.lista.splice(posi, 1);
    this.isActive = true
  }
}
