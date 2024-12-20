import { Injectable } from '@angular/core';
import { QuizeAdapter } from './quize.adapter';
import { IQuizeAdapter } from '../interfaces/quizeAdapter.interface';

@Injectable({
  providedIn: 'root'
})
export class QuestionsOnExamAdapter implements IQuizeAdapter {

  constructor() { }
  Adapt(data: any) : any {
   return {
    questions : data.questions
   }
  }
}
