import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { PoContainerModule, PoFieldModule } from '@po-ui/ng-components';
import { AddressComponent } from '../address/address.component';

@Component({
  selector: 'app-person',
  imports: [ReactiveFormsModule, PoContainerModule, PoFieldModule, AddressComponent],
  templateUrl: './person.component.html'
})
export class PersonComponent implements OnInit {
  form!: FormGroup;
  fb: FormBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.form = this.onFormBuild();
  }

  onFormBuild(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      document: ['', Validators.required],
      street: ['', Validators.required],
      addressNumber: [0, Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      complement: ['']
    });
  }
}
