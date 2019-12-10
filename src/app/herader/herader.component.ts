import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herader',
  template: '<div class="container-fluid">Welcome to {{ title | uppercase }}!</div>',
  styleUrls: ['./herader.component.scss'],
})
export class HeraderComponent implements OnInit {

  title = 'my-app-apllcaiton';

  constructor() { }

  ngOnInit() {
  }

}
