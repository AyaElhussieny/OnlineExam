import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DiplomaCardComponent } from '../diploma-card/diploma-card.component';
import { QuizesService } from '../../services/Quizes/quizes.service';
import { ActivatedRoute } from '@angular/router';
import { Exam } from '../../models/exam';

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

  allExam !: Exam[];
  isNotExam : boolean =false

  constructor(private _quizesService:QuizesService ,
    private _activatedRoute : ActivatedRoute 
  ){
    let active_id = this._activatedRoute.snapshot.params['quize_id'] 
    console.log(active_id)
    this.getExamsOnSubject(active_id)
    }

    getExamsOnSubject(id :any){
      this._quizesService.getAllExamsOnSubjects(id).subscribe({
        next :(res:any)=>{
          console.log(res)
          this.allExam = res.exams ;
          this.allExam.length == 0 ? this.isNotExam = true : this.isNotExam = false
          console.log(this.allExam)

        },
        error :(err : any)=>{
          console.log(err)
        }
      })
    }

}
