import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from '../address/address.component';
import { PoContainerModule, PoFieldModule, PoTabsModule } from '@po-ui/ng-components';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-seller',
  imports: [ReactiveFormsModule, PoContainerModule, PoFieldModule, PoTabsModule, JsonPipe, AddressComponent],
  templateUrl: './seller.component.html'
})
export class SellerComponent implements OnInit {
  form!: FormGroup;
  fb: FormBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.form = this.onFormBuild();
  }

  onFormBuild(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      document: ['', Validators.required],
      street: ['AV. XISTO', Validators.required],
      addressNumber: [0, Validators.required],
      city: ['São Paulo', Validators.required],
      state: ['SP', Validators.required],
      zipCode: ['', Validators.required],
      complement: ['']
    });
  }
}
