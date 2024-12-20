import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MainButtonComponent } from '../../../core/UI/main-button/main-button.component';
import { Exam } from '../../models/exam';
import { PopupExamComponent } from '../popup-exam/popup-exam.component';

@Component({
  selector: 'app-diploma-card',
  standalone: true,
  imports: [
    CommonModule ,
    MainButtonComponent  ,
    PopupExamComponent ,

  ],
  templateUrl: './diploma-card.component.html',
  styleUrl: './diploma-card.component.css'
})
export class DiplomaCardComponent {

  @Input() Exam !: Exam ;
  visible : boolean = false ;
  

  constructor(){}

  showExam(e : any){
    this.visible = true
  }

}
