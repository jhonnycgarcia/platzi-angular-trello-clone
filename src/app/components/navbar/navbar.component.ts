import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  public isOpen = false;
  public isOpenBody = false;

  constructor() { }

  ngOnInit(): void {
  }

}
