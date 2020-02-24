import {Component, OnInit } from '@angular/core';
import {RxDynamicFormBuilder, DynamicFormBuildConfig, DynamicFormConfiguration } from '@rxweb/reactive-dynamic-forms';
import { StateModel } from './models/state.model';
import { SameAsAddressModel } from './models/same-as-address.model';
import {SERVER_DATA } from './data-data';
import {ReactiveFormConfig } from '@rxweb/reactive-form-validators';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-NewTest',
  templateUrl: './NewTest.component.html',
  styleUrls: ['./NewTest.component.css']
})
export class NewTestComponent implements OnInit {

  serverData: any[] = SERVER_DATA;

  dynamicForm: DynamicFormBuildConfig;

  dynamicFormConfiguration: DynamicFormConfiguration;

  constructor(private dynamicFormBuilder: RxDynamicFormBuilder) {}
    uiBindings: string[] = ['firstName', 'country', 'state', 'permanentAddress', 'sameAsPermanent', 'correspondenceAddress'];


  ngOnInit() {
    ReactiveFormConfig.set({
      validationMessage: {
        required: 'This Field is required'
      }
    });
    this.dynamicFormConfiguration = {
      controlConfigModels: [{modelName: 'state', model: StateModel}, {modelName: 'sameAsAddress', model: SameAsAddressModel}]
  };
    this.dynamicForm = this.dynamicFormBuilder.formGroup(this.serverData, this.dynamicFormConfiguration);
}
}


