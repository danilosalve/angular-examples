import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PoButtonModule, PoContainerModule } from '@po-ui/ng-components';

import { ErrorBaseComponent } from '../error-base.component';
@Component({
  selector: 'app-not-found',
  imports: [PoContainerModule, PoButtonModule, NgOptimizedImage],
  templateUrl: './not-found.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent extends ErrorBaseComponent {}
