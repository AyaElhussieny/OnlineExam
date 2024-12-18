import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';
import { LoginApiRes } from '../interfaces/loginApiRes';
import { LoginRes } from '../interfaces/loginRes';

@Injectable({
  providedIn: 'root'
})
export class AuthApiAdapter implements Adapter {

  constructor() { }

  adapt(data:LoginApiRes) : LoginRes{
 
    return {
      message : data.message,
      token : data.token,
      userEmail : data.user.email

    }
  }
}
