import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.intarface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 private mock: ITodo[]=
  [{"title":"Wagtail, african pied","description":"Motacilla aguimp","isComplited":true,"isArchived":false,"endDate":"7/24/2023"},
{"title":"Skua, great","description":"Catharacta skua","isComplited":false,"isArchived":false,"endDate":"3/13/2023"},
{"title":"Crab-eating fox","description":"Dusicyon thous","isComplited":false,"isArchived":true,"endDate":"2/16/2023"},
{"title":"Caracal","description":"Felis caracal","isComplited":true,"isArchived":false,"endDate":"3/25/2023"},
{"title":"Barasingha deer","description":"Cervus duvauceli","isComplited":true,"isArchived":false,"endDate":"10/10/2022"},
]
private _todoSuject:BehaviorSubject<Array<ITodo>>=new BehaviorSubject(this.mock)
  constructor() { }

  public getTodos():Observable<Array<ITodo>>{
return this._todoSuject.asObservable()
  }
}
