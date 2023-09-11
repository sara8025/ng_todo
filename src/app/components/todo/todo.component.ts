import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.intarface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{
/**
 *
 */
@Input() todo:ITodo;

constructor(private todoService:TodoService) {
  
  
}


  ngOnInit(): void {
 }
public onCompleteToDo(todo:ITodo):void{
  todo.isComplited=true;
}
public onArciveTodo():void{
  this.todo.isArchived=true
// this.subscription.remove
}
}
