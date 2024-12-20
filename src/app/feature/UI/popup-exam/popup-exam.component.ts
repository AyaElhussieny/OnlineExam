import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { QuizesService } from '../../services/Quizes/quizes.service';


@Component({
  selector: 'app-popup-exam',
  standalone: true,
  imports: [
    CommonModule ,
    DialogModule
  ],
  templateUrl: './popup-exam.component.html',
  styleUrl: './popup-exam.component.css'
})
export class PopupExamComponent {

  @Input() visible : boolean = false ;
  @Input() examId !: string ;

  constructor(private _quizesService:QuizesService){
    if (this.visible == true) this.getQuestions(this.examId) 
  }

  getQuestions(id :any){
    this._quizesService.getAllQuestionsOnExam(id).subscribe({
      next :(res:any)=>{
        console.log(res)
      },
      error :(err:any)=>{
        console.log(err)
      }
    })
  }

}
