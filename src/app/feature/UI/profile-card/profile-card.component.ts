import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [
    CommonModule ,
    ProgressBarModule ,
    ToastModule
  ],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {

}
