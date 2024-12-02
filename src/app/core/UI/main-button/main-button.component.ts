import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-main-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.css'
})
export class MainButtonComponent {

  @Input() active : string = ''; 
  @Output() action : EventEmitter<any> = new EventEmitter();


  constructor(){}


  actionEmit(value? : any){
    this.action.emit(value);
  }



}