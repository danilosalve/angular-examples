import { ComponentBComponent } from './component-b/component-b.component';
import { Component } from '@angular/core';

import { PoContainerModule, PoPageModule } from '@po-ui/ng-components';
import { ComponentAComponent } from './component-a/component-a.component';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-replay',
  imports: [ComponentAComponent, ComponentBComponent, TimerComponent, PoPageModule, PoContainerModule],
  templateUrl: './replay.component.html'
})
export class ReplayComponent {}
