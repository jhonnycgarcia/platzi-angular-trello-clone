import { Component, OnInit } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faBox, faWaveSquare, faClock, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers, faGrinHearts } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent implements OnInit {

  public faTrello = faTrello;
  public faBox = faBox;
  public faWaveSquare = faWaveSquare;
  public faClock = faClock;
  public faAngleUp = faAngleUp;
  public faAngleDown = faAngleDown;
  public faHeart = faHeart;
  public faBorderAll = faBorderAll;
  public faUsers = faUsers;
  public faGear = faGrinHearts;

  constructor() { }

  ngOnInit(): void {
  }

}
