import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { MainButtonComponent } from '../../UI/main-button/main-button.component';
import { AuthApiService } from 'auth-api';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
     CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    PasswordModule,
    MainButtonComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {


  active !: string ;
  errorMsg !: string ;

  resetPasswordForm : FormGroup = new FormGroup ({
    email : new FormControl ('',[Validators.required , Validators.email]),
    newPassword : new FormControl ('',[Validators.required])
  },{
    // validators :this.validateRePassword
  });
  constructor(private _authApiService:AuthApiService ,
    private _route:Router,
    @Inject(PLATFORM_ID) private platformID: any

  ){
    this.active = 'Reset Password';
  }

  validateRePassword(registerForm : any) : any{

    let passwordControl = registerForm.get("password").value;
    let rePasswordControl = registerForm.get("rePassword").value;
  
    if(passwordControl == rePasswordControl){
      return null;
    }else{
      rePasswordControl.setErrors({rePasswordNotMatch :"Password and Repassword should be matched"});
  
      return {rePasswordNotMatch :"Password and Repassword should be matched"};
    }
  }

  resetPassword(form : FormGroup){
    if(form.valid){
      
      if (isPlatformBrowser(this.platformID)) {
        let email = localStorage.getItem('email');
        form.get('email')?.patchValue(email);
        }
      this._authApiService.resetPassword(form.value).subscribe({
        next:(res:any)=>{
          console.log("res",res);
          this._route.navigate(['/'])

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
