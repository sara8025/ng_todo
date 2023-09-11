import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.intarface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
private todos:ITodo[]=[]
private _singleTodoSubject:BehaviorSubject<ITodo>=new BehaviorSubject(this.todos.length ? this.todos[0]:null);
private _todoSuject:BehaviorSubject<Array<ITodo>>=new BehaviorSubject(this.todos);
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
  public addNewTodo(newTodo:ITodo):void{
    const existTodosArry:Array<ITodo>=this._todoSuject.value;
    existTodosArry.push(newTodo);
    this._todoSuject.next;
  }

}
