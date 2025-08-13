import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { PoFieldModule, PoPageModule } from '@po-ui/ng-components';

import { BaseDetailComponent } from '../../../shared/components/base/base-detail.component';
import { AddressComponent } from './../control-container/address/address.component';
import { UnsavedChanges } from '../../../shared/interfaces/unsaved-changes';

@Component({
  selector: 'app-form-unsaved',
  imports: [PoPageModule, ReactiveFormsModule, AddressComponent, PoFieldModule],
  templateUrl: './form-unsaved.component.html'
})
export class FormUnsavedComponent extends BaseDetailComponent implements OnInit, UnsavedChanges {
  form!: FormGroup;
  fb = inject(FormBuilder);

  constructor() {
    super('forms/container-form');
  }

  ngOnInit(): void {
    this.form = this.onFormBuild();
  }

  onFormBuild(): FormGroup {
    return this.fb.group({
      street: ['', Validators.required],
      addressNumber: [0, Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      complement: ['']
    });
  }

  hasChanges(): boolean {
    return this.form.dirty;
  }
}
