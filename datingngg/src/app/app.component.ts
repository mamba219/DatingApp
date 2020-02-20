import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mambacompany';
   public mamba = ' parent property is propagating through the child';
  public x: any ;
}
