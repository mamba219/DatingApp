import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './Test/Test.component';
import { NewTestComponent } from './NewTest/NewTest.component';
import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms';
import {RxReactiveFormsModule} from '@rxweb/reactive-form-validators';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      TestComponent,
      NewTestComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RxReactiveDynamicFormsModule,
      RxReactiveFormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
