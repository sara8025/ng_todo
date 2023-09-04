import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTodoComponent } from './components/new-todo/new-todo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng_todo';
  /**
   *
   */
  constructor(public dialog:MatDialog) {
  
    
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(NewTodoComponent, {
     
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
}


