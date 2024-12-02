import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MainButtonComponent } from '../../UI/main-button/main-button.component';
import { AuthApiService } from 'auth-api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
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
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {


  active : string = 'Sign in';
  errorMsg !: string ;

  forgetPasswordForm : FormGroup = new FormGroup ({
    email : new FormControl ('',[Validators.required , Validators.email]),
  });
  constructor(private _authApiService:AuthApiService ,
    private _route:Router,
    @Inject(PLATFORM_ID) private platformID: any

  ){
  }


  forgetPassword(form : FormGroup){
    if(form.valid){
      this._authApiService.forgetPassword(form.value).subscribe({
        next:(res:any)=>{
          console.log("res",res);
          if (isPlatformBrowser(this.platformID)) {
            localStorage.setItem('token',res.token);
            localStorage.setItem('userData',res.userData);
          this._route.navigate(['/'])
          }
        },
        error:(err:any)=>{
          console.log("err",err)
          this.errorMsg= 'email is not valid !';
          console.log("errorMsg",this.errorMsg)

        }
      })
    }

  }

}
