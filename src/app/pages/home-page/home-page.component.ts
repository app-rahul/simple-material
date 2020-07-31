import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public homeMenu = [
    { name: 'Button', templateName: 'Button-template'},
    { name: 'Select', templateName: 'select-template'},
    { name: 'example', templateName: 'example-template'},
    { name: 'example', templateName: 'example-template'},
    { name: 'example', templateName: 'example-template'},
    { name: 'example', templateName: 'example-template'},
    { name: 'example', templateName: 'example-template'},
    { name: 'example', templateName: 'example-template'},
    { name: 'example', templateName: 'example-template'},
    { name: 'example', templateName: 'example-template'},
    { name: 'example', templateName: 'example-template'},
    { name: 'example', templateName: 'example-template'},
    { name: 'example', templateName: 'example-template'},
    { name: 'example', templateName: 'example-template'},
    { name: 'example', templateName: 'example-template'},
    { name: 'example', templateName: 'example-template'},
    { name: 'example', templateName: 'example-template'},
    { name: 'example', templateName: 'example-template'},
  ];

  constructor(){ }

  ngOnInit(): void {
  }

}
