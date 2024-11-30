import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';

@Injectable({
  providedIn: 'root'
})
export class AuthApiAdapter implements Adapter {

  constructor() { }

  adapt(data:any) : any{
 
    return {
      message : data.message,
      token : data.token,
      userData : data.user

    }
  }
}
