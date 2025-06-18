import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { PoContainerModule, PoButtonModule, PoPageModule } from '@po-ui/ng-components';

import { ErrorBaseComponent } from '../error-base.component';

@Component({
  selector: 'app-access-denied',
  imports: [PoContainerModule, PoButtonModule, NgOptimizedImage, PoPageModule],
  templateUrl: './access-denied.component.html'
})
export class AccessDeniedComponent extends ErrorBaseComponent {}
