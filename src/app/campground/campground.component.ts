import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campground',
  templateUrl: './campground.component.html',
  styleUrls: ['./campground.component.css']
})

export class CampgroundComponent implements OnInit {

  campground: any;

  constructor() { 
    this.campground = 
    {stellplatz: [ {id: '14', verfuegbar: "besetzt", coords:'580,455,666,400,668,295,594,292,533,435'},
                   {id: '15', verfuegbar: "frei", coords:'673,297,671,174,636,170,594,290'},
                   {id: '16', verfuegbar: "besetzt", coords:'671,167,671,20,612,7,639,167'}
                  ]};
  }

  ngOnInit() {
    console.log('oninit campground');
  }
}
