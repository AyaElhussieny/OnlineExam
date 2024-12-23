import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { QuizesService } from '../../services/Quizes/quizes.service';
import { Question } from '../../models/question';
import { MainButtonComponent } from '../../../core/UI/main-button/main-button.component';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-popup-exam',
  standalone: true,
  imports: [
    CommonModule ,
    DialogModule , 
    MainButtonComponent ,
    ButtonModule ,
    GalleriaModule ,
    RadioButtonModule ,
    CheckboxModule ,
    FormsModule
    
  ],
  templateUrl: './popup-exam.component.html',
  styleUrl: './popup-exam.component.css'
})
export class PopupExamComponent implements OnInit {

  @ViewChild('minutes', { static: true }) minutes !: ElementRef;
  @ViewChild('seconds', { static: true }) seconds !: ElementRef;

  @Input() visible : boolean = false ;
  @Input() examId !: string ;
  allQuestions !: Question [] ;
  isExamOpen : boolean = false;
  numberOfQuestions !: number;
  examDuration !: string;
  display !: any;
  selectedAnswer : any


  position: string  | undefined = 'bottom';

  showIndicatorsOnItem: boolean = false;

  responsiveOptions: any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];




  constructor(private _quizesService:QuizesService){}
  ngOnInit(): void {
    console.log( this.visible , this.examId)
    if (this.visible == true) this.getQuestions(this.examId)   }

  getQuestions(id :any){
    this._quizesService.getAllQuestionsOnExam(id).subscribe({
      next :(res:any)=>{
        console.log(res)
        this.allQuestions = res.questions ;
        this.numberOfQuestions = this.allQuestions.length ;
        this.examDuration = this.allQuestions[0].exam.duration
        console.log(this.numberOfQuestions,this.examDuration, this.allQuestions)

      },
      error :(err:any)=>{
        console.log(err)
      }
    })
  }

  openExam(){
    this.isExamOpen = true;
    this.visible =false;

    this.timer(Number(this.examDuration))
  }

  timer(minute : number) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log("finished");
        clearInterval(timer);
      }
    }, 1000);
  }

}
