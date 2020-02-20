import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


const MaterialComponents = [
  MatButtonModule
];

@NgModule({
  imports: [MatButtonModule],
  exports: [MaterialComponents]
})
export class MaterialModule { }
