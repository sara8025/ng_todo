import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoComponent } from '../components/new-todo/new-todo.component';
import { Subscription } from 'rxjs';
import { TodoService } from '../services/todo.service';
import { ITodo } from '../models/todo.intarface';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  

  public todo: ITodo;
  public todos: Array<ITodo> =
    [];
  constructor(public dialog: MatDialog, private todoService: TodoService) {


  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {

    this.subscription.add(this.todoService.getTodos().subscribe(data => {
      this.todos = data,
        console.log(data)
    }

    ))

    this.subscription.add(
      this.todoService.getSelectedTodo().subscribe(data =>
        this.todo = data)
    )
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoComponent, {

    });

  }
}