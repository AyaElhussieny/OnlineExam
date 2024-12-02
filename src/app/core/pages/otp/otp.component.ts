import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MainButtonComponent } from '../../UI/main-button/main-button.component';
import { AuthApiService } from 'auth-api';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-otp',
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
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css'
})
export class OTPComponent {


  active !: string;
  errorMsg !: string ;

  vrifyResetCodeForm : FormGroup = new FormGroup ({
    email : new FormControl ('',[Validators.required , Validators.email]),
  });
  constructor(private _authApiService:AuthApiService ,
    private _route:Router,
    @Inject(PLATFORM_ID) private platformID: any

  ){
    this.active = 'Verify';
  }


  vrifyResetCode(form : FormGroup){
    if(form.valid){
      this._authApiService.vrifyResetCode(form.value).subscribe({
        next:(res:any)=>{
          console.log("res",res);
          this._route.navigate(['/reset-password'])  
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
