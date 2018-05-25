import { Component } from '@angular/core';

import { sha3_512 } from 'js-sha3';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  hash: String;
  login: string;

  constructor() {

     this.hash= sha3_512("stringa");
     console.log(this.hash);
     
  }

  onClick(){

    console.log(this.login);
    this.hash= sha3_512(this.login);
    console.log(this.hash);
  }
}
