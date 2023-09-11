import { Component, ViewChild } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ITodo } from 'src/app/models/todo.intarface';
import { TodoService } from 'src/app/services/todo.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.css']
})
export class NewTodoComponent {

  @ViewChild('f') form:NgForm
  constructor(private todoService:TodoService,public dialog:MatDialog){

  }
  public containerTodoSubmit():void{
    // create new object to send it to service
    const formValus =this.form.form.value
    if(this.form.valid){
    const newTodo:ITodo={
      
      id:uuidv4(),
      title:formValus.title,
      description:formValus.description,
      endDate:formValus.date,
      isComplited:false,
      isArchived:false,
      selected:false
    }
    console.log(this.form)
    this.todoService.addNewTodo(newTodo)
    this.dialog.closeAll();
    console.log(this.form)
    console.log('On submit')
  }
}


}

