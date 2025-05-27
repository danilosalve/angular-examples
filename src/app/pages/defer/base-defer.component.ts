import { Directive, input } from '@angular/core';

@Directive()
export abstract class BaseDeferComponent {
  readonly height = input.required<number>();
}
