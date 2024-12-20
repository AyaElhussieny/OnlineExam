import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { QuizesEndPoint } from '../Enums/quizesAPIs.Endpoints';
import { QuizeAdapter } from '../Adapters/quize.adapter';
import { Quize } from '../../models/quize';

@Injectable({
  providedIn: 'root'
})
export class QuizesService {

  constructor(private _httpClient:HttpClient ,
    private _quizeAdapter:QuizeAdapter
  ) { 
  }

  getAllQuizes() : Observable <Quize []>{

    return this._httpClient.get(QuizesEndPoint.Quizes).pipe(
      map((res:any) => this._quizeAdapter.Adapt(res))
    )
  
  }
}
