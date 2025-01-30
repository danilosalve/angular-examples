import { Component, inject, OnInit } from '@angular/core';
import { ControlContainer, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { PoContainerModule, PoFieldModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-address',
  imports: [ReactiveFormsModule, PoFieldModule, PoContainerModule],
  templateUrl: './address.component.html',
})
export class AddressComponent implements OnInit {
  protected form!: UntypedFormGroup;
  private readonly controlContainer: ControlContainer = inject(ControlContainer);

  ngOnInit(): void {
    this.form = this.controlContainer.control as UntypedFormGroup;
  }
}
