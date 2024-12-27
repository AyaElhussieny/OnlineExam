import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Answer, Question } from '../../models/question';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    CommonModule ,
    RadioButtonModule ,
    CheckboxModule ,
    FormsModule

  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
@Input() question !: Question ;
correctedQuestions : Question [] = [];
wrongQuestions : Question [] =[] ;
selectedAnswer !: Answer ;
disabledBtnSignal : boolean = true;
  


constructor(){}

selectAnswerOnQuestion(correctAnswer : Question){
  console.log(this.selectedAnswer.key)
  if(this.selectedAnswer?.key) this.disabledBtnSignal = false ;

  if(correctAnswer.correct == this.selectedAnswer.key){
    console.log(correctAnswer.correct , this.selectedAnswer.key ,true)
    this.correctedQuestions.push(correctAnswer)
  }
  else{
    console.log(correctAnswer.correct , this.selectedAnswer.key ,false)
    this.wrongQuestions.push(correctAnswer)

  }
  
}
}
