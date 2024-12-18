import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizesService {

  constructor(private _httpClient:HttpClient) { 

  }

  getAllQuizes() : Observable <any>{

    return this._httpClient.get(`/api/v1/subjects`)
  }
}
