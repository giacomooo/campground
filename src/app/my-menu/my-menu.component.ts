import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menuItem';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.css']
})

export class MyMenuComponent {

  menuItems: MenuItem[];

  constructor() {
   this.menuItems = [{tabDescription: 'Reservation', link: '/reservation' },
   {tabDescription: 'Home', link: '/home' },
   {tabDescription: 'Login', link: '/login' },
   {tabDescription: 'CampGround', link: '/campground' },
   {tabDescription: 'Events', link:  '/Events'}];
  }

}
