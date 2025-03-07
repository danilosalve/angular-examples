import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PoContainerModule, PoFieldModule, PoPageModule } from '@po-ui/ng-components';
import { JsonPipe } from '@angular/common';

import { BaseDetailComponent } from '../../../shared/components/base/base-detail.component';
import { Field } from './shared/interfaces/field';
import { FieldsService } from './shared/services/fields.service';

@Component({
  selector: 'app-form-record',
  imports: [PoContainerModule, PoPageModule, PoFieldModule, ReactiveFormsModule, JsonPipe],
  templateUrl: './form-record.component.html',
})
export class FormRecordComponent extends BaseDetailComponent {
  private readonly fieldsService = inject(FieldsService);
  private readonly fb = inject(FormBuilder);

  fields: Field[] = this.fieldsService.getFields();
  fieldsFormControl: Field[] = [];
  form = this.fb.record({});
  options = this.fieldsService.getOptionsFields();

  constructor() {
    super('forms/container-form');
  }

  cleanFormControl(controls: string[]): void {
    this.fieldsFormControl = [];
    controls.forEach(control => this.form.removeControl(control));
  }

  getField(name: string): Field {
    return this.fields.filter(f => f.name === name)[0];
  }

  onSelectingField(fields: string[]): void {
    this.cleanFormControl(fields);

    fields.forEach(name => {
      const field = this.getField(name);
      this.form.addControl(name, this.fb.control(field.value || ''));
      this.fieldsFormControl.push(field);
    });
  }
}
