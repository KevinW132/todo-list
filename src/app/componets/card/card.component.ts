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
  lista: String[] = ["primero", "segundo"];
  
  eliminar(posi: number){
    this.lista.splice(posi, 1);
  }
  agregar(){
    this.lista.push(this.task);
    this.task = "";
  }
}
