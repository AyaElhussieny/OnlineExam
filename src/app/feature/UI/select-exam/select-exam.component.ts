import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProfileCardComponent } from '../profile-card/profile-card.component';
import { AllQuizesComponent } from '../all-quizes/all-quizes.component';

@Component({
  selector: 'app-select-exam',
  standalone: true,
  imports: [
    CommonModule ,
    ProfileCardComponent,
    AllQuizesComponent ,   
  ],
  templateUrl: './select-exam.component.html',
  styleUrl: './select-exam.component.css'
})
export class SelectExamComponent {

}
