import { Injectable } from '@angular/core';
import { Adapter } from '../../../../../projects/auth-api/src/lib/interfaces/adapter';
import { Exam } from '../../models/exam';
import { QuizeAdapter } from './quize.adapter';
import { IQuizeAdapter } from '../interfaces/quizeAdapter.interface';

@Injectable({
  providedIn: 'root'
})
export class ExamsOnSubjectAdapter implements IQuizeAdapter{

  constructor() { }

  Adapt(data: any) : any {
    return{
      exams : data.exams
    };
  }
  
}
