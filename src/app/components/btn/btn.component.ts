import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html'
})
export class BtnComponent implements OnInit {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';

  // Keys of the mapColors object are the possible values of the color property.
  @Input() color: 'success' | 'primary' | 'danger' | 'light' | 'sky' = 'primary';

  private mapColors = {
    success: `text-white bg-success-700 hover:bg-success-800 focus:ring-success-300`,
    primary: `text-white bg-primary-700 hover:bg-primary-800 focus:ring-primary-300`,
    danger: `text-white bg-danger-700 hover:bg-danger-800 focus:ring-danger-300`,
    sky: `text-white bg-sky-700 hover:bg-sky-800 focus:ring-sky-300`,
    light: `text-gray-700 bg-gray-200 hover:bg-gray-800 focus:ring-gray-300`,
  };

  constructor() { }

  ngOnInit(): void {
  }

  get colors() {
    // return {
    //   'text-white': this.color === 'success' || this.color === 'primary' || this.color === 'red',
    //   'text-gray-700': this.color === 'gray-light',

    //   'bg-success-700': this.color === 'success',
    //   'hover:bg-success-800': this.color === 'success',
    //   'focus:ring-success-300': this.color === 'success',

    //   'bg-primary-700': this.color === 'primary',
    //   'hover:bg-primary-800': this.color === 'primary',
    //   'focus:ring-primary-300': this.color === 'primary',

    //   'bg-red-700': this.color === 'red',
    //   'hover:bg-red-800': this.color === 'red',
    //   'focus:ring-red-300': this.color === 'red',

    //   'bg-gray-200': this.color === 'gray-light',
    //   'hover:bg-gray-800': this.color === 'gray-light',
    //   'focus:ring-gray-300': this.color === 'gray-light',
    // }

    return this.mapColors[this.color];
  }

}
