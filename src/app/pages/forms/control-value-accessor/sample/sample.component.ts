import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { PoPageModule } from '@po-ui/ng-components';

import { CustomInputComponent } from '../custom-input/custom-input.component';
import { BaseDetailComponent } from '../../../../shared/components/base/base-detail.component';

@Component({
  selector: 'app-sample',
  imports: [CustomInputComponent, JsonPipe, ReactiveFormsModule, PoPageModule],
  templateUrl: './sample.component.html'
})
export class SampleComponent extends BaseDetailComponent implements OnInit {
  form!: FormGroup;
  private readonly fb = inject(FormBuilder);

  constructor() {
    super('forms/container-form');
  }

  ngOnInit(): void {
    this.form = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      name: [''],
      description: ['']
    });
  }
}
