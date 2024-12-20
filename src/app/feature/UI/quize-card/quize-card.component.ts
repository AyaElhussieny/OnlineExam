import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Quize } from '../../models/quize';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-quize-card',
  standalone: true,
  imports: [
    CommonModule,
    CardModule ,
    RouterLink 
  ],
  templateUrl: './quize-card.component.html',
  styleUrl: './quize-card.component.css'
})
export class QuizeCardComponent {
@Input() quize !: Quize;

}
