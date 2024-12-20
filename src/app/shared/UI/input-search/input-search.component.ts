
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';



@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [
    CommonModule ,
    InputTextModule,
    FormsModule,
    FloatLabelModule ,
    ButtonModule ,
    BadgeModule
  ],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.css'
})
export class InputSearchComponent {

}
