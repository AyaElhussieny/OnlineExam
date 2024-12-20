import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { QuizesEndPoint } from '../Enums/quizesAPIs.Endpoints';
import { QuizeAdapter } from '../Adapters/quize.adapter';
import { Quize } from '../../models/quize';
import { Exam } from '../../models/exam';
import { ExamsOnSubjectAdapter } from '../Adapters/exams-on-subject.adapter';
import { QuestionsOnExamAdapter } from '../Adapters/questions-on-exam.adapter';

@Injectable({
  providedIn: 'root'
})
export class QuizesService {

  constructor(private _httpClient:HttpClient ,
    private _quizeAdapter:QuizeAdapter ,
    private _examsOnSubjectAdapter:ExamsOnSubjectAdapter ,
    private _questionsOnExamAdapter:QuestionsOnExamAdapter
  ) { 
  }

  getAllQuizes() : Observable <Quize []>{

    return this._httpClient.get(QuizesEndPoint.Quizes).pipe(
      map((res:any) => this._quizeAdapter.Adapt(res))
    )
  
  }

  getAllExamsOnSubjects(id : string) : Observable <Exam []>{
    return this._httpClient.get(`${QuizesEndPoint.ExamsOnSubject}${id}`).pipe(
      map((res:any)=> this._examsOnSubjectAdapter.Adapt(res))
    )
}

getAllQuestionsOnExam(id : string) : Observable <any>{
  return this._httpClient.get(`${QuizesEndPoint.QuestionOnExam}${id}`).pipe(
    map((res:any)=> this._questionsOnExamAdapter.Adapt(res))
  )

}
}
