import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.intarface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit,OnDestroy{
/**
 *
 */public todo:ITodo;
 private subscription:Subscription=new Subscription();

constructor(private todoService:TodoService) {
  
  
}
  ngOnDestroy(): void {
this.subscription.unsubscribe();  }

  ngOnInit(): void {
this.subscription.add(
  this.todoService.getSelectedTodo().subscribe(data=>
    this.todo=data)
)  }
public onCompleteToDo(todo:ITodo):void{
  todo.isComplited=true;
}
public onArciveTodo():void{
  this.todo.isArchived=true
// this.subscription.remove
}
}
