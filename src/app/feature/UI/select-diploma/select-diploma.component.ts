import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DiplomaCardComponent } from '../diploma-card/diploma-card.component';

@Component({
  selector: 'app-select-diploma',
  standalone: true,
  imports: [
    CommonModule ,
    DiplomaCardComponent 
  ],
  templateUrl: './select-diploma.component.html',
  styleUrl: './select-diploma.component.css'
})
export class SelectDiplomaComponent {

}
