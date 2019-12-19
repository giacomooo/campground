import { Component } from '@angular/core';
import { MenuItem } from './menuItem';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.css']
})

export class MyMenuComponent {

  menuItems: MenuItem[];

  constructor() {
    this.menuItems = [
      {tabDescription: 'Home', link: '/home' },
      {tabDescription: 'Reservation', link: '/reservation' },
      {tabDescription: 'Events', link:  '/Events'},
      {tabDescription: 'Login', link: '/login' },
    ];
  }
}
