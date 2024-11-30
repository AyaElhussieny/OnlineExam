import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthApiService } from 'auth-api';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  form : any ={
    "email": "admin5@1elevate.com",
    "password":"Elevate@123"
  }
  constructor(private _authApiService:AuthApiService){
    this.login()

  }


  login(){
    this._authApiService.login(this.form).subscribe({
      next:(res:any)=>{
        console.log("res",res)
      },
      error:(err:any)=>{
        console.log("err",err)
      }
    })

  }



}
