import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.intarface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit,OnDestroy{
  i_selected:number=0
public todos: Array<ITodo>=
[];
private subscription:Subscription=new Subscription();
  constructor(private todoService:TodoService){

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
 }
  ngOnInit(): void {

    this.subscription.add(this.todoService.getTodos().subscribe(data=>{
      this.todos=data,
      console.log(data)
    }
      
      ))   }

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
