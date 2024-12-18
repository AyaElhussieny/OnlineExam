import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { MainButtonComponent } from '../../UI/main-button/main-button.component';
import { AuthApiService } from 'auth-api';
import {  Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
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

  active !: string ;
  errorMsg !: string ;

  loginForm : FormGroup = new FormGroup ({
    email : new FormControl ('',[Validators.required , Validators.email]),
    password : new FormControl ('',[Validators.required])
  });
  constructor(private _authApiService:AuthApiService ,
    private _route:Router,
    @Inject(PLATFORM_ID) private platformID: any

  ){
    this.active = 'Sign in';
  }


  login(form : FormGroup){
    if(form.valid){
      this._authApiService.login(form.value).subscribe({
        next:(res:any)=>{
          console.log("res",res);
          if (isPlatformBrowser(this.platformID)) {
            localStorage.setItem('token',res.token);
            localStorage.setItem('userData',res.userData);
          this._route.navigate(['/home'])
          }
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
