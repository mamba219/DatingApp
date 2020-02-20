import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-Test',
  templateUrl: './Test.component.html',
  styleUrls: ['./Test.component.css'],

})
export class TestComponent implements OnInit {

  public list:any = []

  constructor() { 
    console.log("form created!")
  }

  ngOnInit() {
    this.list =[
      {
         "type": "email",
         "name": "email",
          "value": "",     "placeholder": "your email here",
           "required": true
      },
      {
         "type": "FirstName",
         "name": "FirstName",
          "value": "",     "placeholder": "your FirstName here",
           "required": true
      },
      {
         "type": "LastName",
         "name": "LastName",
          "value": "",     "placeholder": "your email here",
           "required": false
      },
      {
         "type": "password",
         "name": "password",
          "value": "",     "placeholder": "your password here",
           "required": true
      }
      ]
  }

}
