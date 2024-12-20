import { Injectable } from '@angular/core';
import { Adapter } from '../../../../../projects/auth-api/src/lib/interfaces/adapter';
import { Exam } from '../../models/exam';

@Injectable({
  providedIn: 'root'
})
export class ExamsOnSubjectAdapter implements Adapter{

  constructor() { }
  adapt(data: any) : any{
    return{
      exams : data.exams
    };
  }
}
