import { Directive, input } from '@angular/core';

@Directive()
export abstract class BaseDeferComponent {
  height = input.required<number>();
}
