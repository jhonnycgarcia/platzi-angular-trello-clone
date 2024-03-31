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

  public items = [
    {
      label: 'Item 1',
      items: [
        { label: 'Sub Item 1.1' },
        { label: 'Sub Item 1.2' },
        { label: 'Sub Item 1.3' },
        { label: 'Sub Item 1.4' }
      ]
    },
    {
      label: 'Item 2',
      items: [
        { label: 'Sub Item 2.1' },
        { label: 'Sub Item 2.2' },
        { label: 'Sub Item 2.3' },
        { label: 'Sub Item 2.4' }
      ]
    },
    {
      label: 'Item 3',
      items: [
        { label: 'Sub Item 3.1' },
        { label: 'Sub Item 3.2' },
        { label: 'Sub Item 3.3' },
        { label: 'Sub Item 3.4' }
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
