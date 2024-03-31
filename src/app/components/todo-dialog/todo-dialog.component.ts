import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { faCheckSquare, faBars, faUser, faTag, faClock, faClose, faCheckToSlot } from '@fortawesome/free-solid-svg-icons';

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

  constructor(
    private dialogRef: DialogRef
  ) { }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
