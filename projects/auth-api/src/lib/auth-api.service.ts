import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { AuthAPI } from './base/AuthAPI';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthApiAdapter } from './adapter/auth-login.adapter';
import { AuthEndPoint } from './enums/AuthAPI.endpoint';
import { Login } from './interfaces/login';
import { LoginRes } from './interfaces/loginRes';
import { LoginApiRes } from './interfaces/loginApiRes';
import { Register } from './interfaces/register';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AuthAPI{

  token !: any;
  constructor( private _httpClient:HttpClient ,
     private _authApiAdapter:AuthApiAdapter,
    @Inject(PLATFORM_ID) private platformID: any
    ) { }

  getToken() : string{
   if (isPlatformBrowser(this.platformID)) 
    this.token = localStorage.getItem('token');
  console.log(this.token)

    return this.token;
  }

  
 login(data: Login): Observable<LoginRes | any> {

  return this._httpClient.post(AuthEndPoint.SignIn,data).pipe(
    map((res : any) => this._authApiAdapter.adapt(res)),
   // catchError(err => of([]))  //return observable
  )
}
 register(data: Register): Observable<LoginApiRes | any> {
  return this._httpClient.post(AuthEndPoint.SignUp,data)
  }

 changePassword(data: any): Observable<any> {
return this._httpClient.post(AuthEndPoint.ChangePassword,data)
}
 editProfile(data : any): Observable<any> {
return this._httpClient.put(AuthEndPoint.EditProfile,data)
  }

  forgetPassword(email : string) :Observable<any>{
    return this._httpClient.post(AuthEndPoint.ForgotPassword,email)
  }

  vrifyResetCode(code : string) :Observable<any>{
    return this._httpClient.post(AuthEndPoint.VerifyResetCode,code)
  } 
  resetPassword(data : any) :Observable<any>{
    return this._httpClient.post(AuthEndPoint.ResetPassword,data)
  }
}
