import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainButtonComponent } from '../../../core/UI/main-button/main-button.component';

@Component({
  selector: 'app-diploma-card',
  standalone: true,
  imports: [
    CommonModule ,
    MainButtonComponent  
  ],
  templateUrl: './diploma-card.component.html',
  styleUrl: './diploma-card.component.css'
})
export class DiplomaCardComponent {

}
