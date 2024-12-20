import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { QuizeCardComponent } from '../quize-card/quize-card.component';
import { Quize } from '../../models/quize';
import { ScrollerModule } from 'primeng/scroller';
import { QuizesService } from '../../services/Quizes/quizes.service';

@Component({
  selector: 'app-all-quizes',
  standalone: true,
  imports: [
    CommonModule,
    QuizeCardComponent ,
    ScrollerModule
  ],
  templateUrl: './all-quizes.component.html',
  styleUrl: './all-quizes.component.css'
})
export class AllQuizesComponent {
allQuizes !: Quize[]
size !: number ;



constructor (private _quizesService:QuizesService){
  this.getQuizes()

}

getQuizes(){

  this._quizesService.getAllQuizes().subscribe({
    next:(res:any)=>{
      console.log(res);
      this.allQuizes = res.subjects;
      this.size = this.allQuizes.length
      console.log(this.allQuizes);

    },
    error:(err:any)=>{
      console.log(err)
    }
  })
}

}
