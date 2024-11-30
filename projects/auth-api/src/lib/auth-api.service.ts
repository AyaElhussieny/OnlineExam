import { Injectable } from '@angular/core';
import { AuthAPI } from './base/AuthAPI';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthApiAdapter } from './adapter/auth-api.adapter';
import { AuthEndPoint } from './enums/AuthAPI.endpoint';
import { Login } from './interfaces/login';
import { LoginRes } from './interfaces/LoginRes';
import { LoginApiRes } from './interfaces/loginApiRes';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AuthAPI{

  constructor( private _httpClient:HttpClient , private _authApiAdapter:AuthApiAdapter) { }
 login(data: Login): Observable<LoginRes> {

  return this._httpClient.post(AuthEndPoint.SignIn,data).pipe(
    map((res : any) => this._authApiAdapter.adapt(res)),
    // catchError(err => of([]))  //return observable
  )
}
 register(data: any): Observable<any> {
  return this._httpClient.post(AuthEndPoint.SignUp,data)
  }
}
