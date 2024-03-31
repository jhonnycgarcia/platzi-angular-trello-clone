import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { faCheckSquare, faBars, faUser, faTag, faClock, faClose, faCheckToSlot } from '@fortawesome/free-solid-svg-icons';
import { ToDo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html'
})
export class TodoDialogComponent implements OnInit {

  public faClose = faClose;
  public faCheckToSlot = faCheckToSlot;
  public faBars = faBars;
  public faUser = faUser;
  public faTag = faTag;
  public faCheckSquare = faCheckSquare;
  public faClock = faClock;

  public todo: ToDo;

  constructor(
    private dialogRef: DialogRef<DialogOutputData>,
    @Inject(DIALOG_DATA) private data: ToDo,
  ) {
    this.todo = this.data;
  }

  ngOnInit(): void {
  }

  closeDialog(status: boolean = false){
    this.dialogRef.close({status});
  }

}

interface DialogOutputData {
  status: boolean
}
