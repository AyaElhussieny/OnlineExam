import { Injectable } from '@angular/core';
import { IQuizeAdapter } from '../interfaces/quizeAdapter.interface';


@Injectable({
  providedIn: 'root'
})
export class QuizeAdapter implements IQuizeAdapter {

  constructor() { }
  Adapt(data : any) : any{
 
    return{
      subjects : data.subjects
    }
  }
}
