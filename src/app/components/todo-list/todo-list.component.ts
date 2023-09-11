import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.intarface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
@Input() todos: Array<ITodo>=
[];
  constructor(private todoService:TodoService){

  }

  ngOnInit(): void {

     }

      onTodoClick(todo:ITodo,index:number):void{
          this.todoService.setSelectedTodo(todo);
          this.todos.forEach(todo=>{
            if(todo.selected){
              todo.selected=false
            }
          })
          this.todos[index].selected=true;

      }

}
