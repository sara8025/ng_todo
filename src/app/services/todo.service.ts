import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.intarface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 private mock: ITodo[]=
  [{"id":1 ,"title":"Wagtail, african pied","description":"Motacilla aguimp","isComplited":false,"isArchived":false,"endDate":"7/24/2023","selected":true},
{"id":2 ,"title":"Skua, great","description":"Catharacta skua","isComplited":false,"isArchived":false,"endDate":"3/13/2023","selected":false},
{"id":3 ,"title":"Crab-eating fox","description":"Dusicyon thous","isComplited":false,"isArchived":true,"endDate":"2/16/2023","selected":false},
{"id":4 ,"title":"Caracal","description":"Felis caracal","isComplited":false,"isArchived":false,"endDate":"3/25/2023","selected":false},
{"id":5 ,"title":"Barasingha deer","description":"Cervus duvauceli","isComplited":false,"isArchived":false,"endDate":"10/10/2022","selected":false},
]
private _singleTodoSubject:BehaviorSubject<ITodo>=new BehaviorSubject(this.mock[0]);
private _todoSuject:BehaviorSubject<Array<ITodo>>=new BehaviorSubject(this.mock);
  constructor() { }

  public getTodos():Observable<Array<ITodo>>{
return this._todoSuject.asObservable()
  }
  public getSelectedTodo():Observable<ITodo>{
  return  this._singleTodoSubject.asObservable()
  }
  public setSelectedTodo(todo:ITodo){
    this._singleTodoSubject.next(todo)
  }
}
