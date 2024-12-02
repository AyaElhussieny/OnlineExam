import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { MainButtonComponent } from '../../UI/main-button/main-button.component';
import { AuthApiService } from 'auth-api';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    PasswordModule,
    MainButtonComponent
   ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  active : string = 'Sign in';
  errorMsg !: string ;

  loginForm : FormGroup = new FormGroup ({
    email : new FormControl ('',[Validators.required , Validators.email]),
    password : new FormControl ('',[Validators.required])
  });
  constructor(private _authApiService:AuthApiService ,
    private _route:Router
  ){
  }


  login(form : FormGroup){
    if(form.valid){
      this._authApiService.login(form.value).subscribe({
        next:(res:any)=>{
          console.log("res",res);
          this._route.navigate(['/sign-up'])
        },
        error:(err:any)=>{
          console.log("err",err)
          this.errorMsg= 'email or password is not valid !';
          console.log("errorMsg",this.errorMsg)

        }
      })
    }

  }



}
