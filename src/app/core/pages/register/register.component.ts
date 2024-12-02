import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { MainButtonComponent } from '../../UI/main-button/main-button.component';
import { AuthApiService } from 'auth-api';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    PasswordModule,
    MainButtonComponent,
    RouterLink ,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  active : string = 'Create Account';
  errorMsg !: string ;


  registerForm : FormGroup = new FormGroup ({
    username : new FormControl ('',[Validators.required ]),
    firstName : new FormControl ('',[Validators.required ]),
    lastName : new FormControl ('',[Validators.required ]),
    email : new FormControl ('',[Validators.required , Validators.email]),
    phone : new FormControl ('',[Validators.required ]),
    password : new FormControl ('',[Validators.required]),
    rePassword : new FormControl ('',[Validators.required])
  },{
    validators : this.validateRePassword
  });
  constructor(private _authApiService:AuthApiService ,
    private _route:Router
  ){
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

  register(form : FormGroup){
    if(form.valid){
      this._authApiService.login(form.value).subscribe({
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
