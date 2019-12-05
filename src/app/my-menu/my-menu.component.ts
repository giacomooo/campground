import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-menu',
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.css']
})

export class MyMenuComponent implements OnInit {

  menuItems: any;

  constructor() {
    this.menuItems = {name:'sadf',
    link: 'next', multi: ['000', '111', '222'] };
  }

  ngOnInit() {

  }
}
