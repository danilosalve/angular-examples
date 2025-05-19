import { Component, inject } from '@angular/core';
import { PoButtonModule, PoContainerModule, PoFieldModule, PoPageModule } from '@po-ui/ng-components';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';

import { BaseDetailComponent } from '../../../shared/components/base/base-detail.component';

@Component({
  selector: 'app-dynamic-forms',
  imports: [
    PoPageModule,
    PoFieldModule,
    PoButtonModule,
    PoContainerModule,
    ReactiveFormsModule,
    JsonPipe,
    CommonModule
  ],
  templateUrl: './dynamic-forms.component.html'
})
export class DynamicFormsComponent extends BaseDetailComponent {
  private readonly fb = inject(FormBuilder);
  form: FormGroup = this.fb.group({
    dynamicFields: this.fb.array([]) // Initialize form array
  });
  submitted = false;

  constructor() {
    super('dynamic/components');
  }

  get dynamicFields(): FormArray {
    return this.form.get('dynamicFields') as FormArray;
  }

  addField() {
    const fieldGroup = this.fb.group({
      value: ['', Validators.required] // Add validation
    });
    this.dynamicFields.push(fieldGroup); // Add field to the array
    this.submitted = false;
  }

  removeField(index: number): void {
    this.dynamicFields.removeAt(index); // Remove field from the array
    this.submitted = false;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitted = true;
    }
  }
}
