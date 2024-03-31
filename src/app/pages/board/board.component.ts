import { Dialog } from '@angular/cdk/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { TodoDialogComponent } from 'src/app/components/todo-dialog/todo-dialog.component';
import { Column, ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      } 
    `
  ]
})
export class BoardComponent implements OnInit {

  public columns : Column[] = [
    {
      title: 'ToDo',
      todos: [
        { id: '1', title: 'Task 1' },
        { id: '2', title: 'Task 2' },
        { id: '3', title: 'Task 3' },
        { id: '4', title: 'Task 4' },
        { id: '5', title: 'Task 5' },
      ]
    },
    {
      title: 'Doing',
      todos: [
        { id: '6', title: 'Doing' },
      ]
    },
    {
      title: 'Done',
      todos: [
        { id: '7', title: 'Done!' },
      ]
    }
  ];

  public todos: ToDo[] = [];

  public doings: ToDo[] = [];

  public dones: ToDo[] = [];

  constructor(
    private dialogSrv: Dialog
  ) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<ToDo[]>) {
    console.log(event);

    if(event.previousContainer === event.container){
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addColumn(){
    this.columns.push({
      title: 'New Column',
      todos: []
    });
  }

  openDialog(todo: ToDo){
    this.dialogSrv.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      autoFocus: false,
      data: todo
    });

  }

}
