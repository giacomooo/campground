import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menuItem';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.css']
})

export class MyMenuComponent implements OnInit {

  menuItems: MenuItem[];

  constructor() {
   this.menuItems = [{tabDescription: 'Reservation', link: '/reservation' },
   {tabDescription: 'Home', link: '/home' },
   {tabDescription: 'Events', link:  '/Events'}];
  }

  ngOnInit() {
  }
}
