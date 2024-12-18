import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProfileCardComponent } from '../../UI/profile-card/profile-card.component';
import { InputSearchComponent } from '../../../shared/UI/input-search/input-search.component';
import { MainButtonComponent } from '../../../core/UI/main-button/main-button.component';
import { ProfileIconComponent } from '../../../shared/UI/profile-icon/profile-icon.component';
import { AllQuizesComponent } from '../../UI/all-quizes/all-quizes.component';
import { QuizesService } from '../../services/quizes.service';
import { SideBarComponent } from '../../UI/side-bar/side-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule ,
    ProfileCardComponent,
    InputSearchComponent ,
    MainButtonComponent ,
    ProfileIconComponent ,
    AllQuizesComponent ,
    SideBarComponent 
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  active !: string 
constructor(private _quizesService:QuizesService){
  this.active ='Start Quiz'
  this.getQuizes()
}

getQuizes(){

  this._quizesService.getAllQuizes().subscribe({
    next:(res:any)=>{
      console.log(res)
    },
    error:(err:any)=>{
      console.log(err)
    }
  })
}

}
