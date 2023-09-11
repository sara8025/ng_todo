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
    if(this._todoSuject.value.length>-1){
      const ts=localStorage.getItem("todos");
      if(ts){
        const exsistingTodos:Array<ITodo>=JSON.parse(ts);
        exsistingTodos[0].selected=true
        this._todoSuject.next(exsistingTodos)
        this._singleTodoSubject.next(exsistingTodos[0])
        }
    }
   
   
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
    
    localStorage.setItem("todos",JSON.stringify(existTodosArry))
    console.log(localStorage.getItem("todos")+'tttttttttttt')
  }

}
