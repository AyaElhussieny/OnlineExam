import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputSearchComponent } from '../../../shared/UI/input-search/input-search.component';
import { MainButtonComponent } from '../../../core/UI/main-button/main-button.component';
import { ProfileIconComponent } from '../../../shared/UI/profile-icon/profile-icon.component';
import { SideBarComponent } from '../../UI/side-bar/side-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule ,
    RouterOutlet ,
    InputSearchComponent ,
    MainButtonComponent ,
    ProfileIconComponent ,
    SideBarComponent 
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  active !: string ;
constructor(){
  this.active ='Start Quiz'
}



}
