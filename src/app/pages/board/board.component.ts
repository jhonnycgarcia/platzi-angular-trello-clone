import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/todo.model';

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

  public todos: ToDo[] = [
    { id: '1', title: 'Task 1' },
    { id: '2', title: 'Task 2' },
    { id: '3', title: 'Task 3' },
    { id: '4', title: 'Task 4' },
    { id: '5', title: 'Task 5' },
  ];

  public doings: ToDo[] = [
    { id: '6', title: 'Doing' },
  ];

  public dones: ToDo[] = [
    { id: '7', title: 'Done' },
  ];

  constructor() { }

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

}
