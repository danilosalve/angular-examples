import { Component } from '@angular/core';
import { PoContainerModule, PoPageModule, PoWidgetModule } from '@po-ui/ng-components';
import { TimerComponent } from './timer/timer.component';
import { HoverComponent } from './hover/hover.component';
import { InteractionComponent } from './interaction/interaction.component';
import { ViewportComponent } from './viewport/viewport.component';
import { WhenComponent } from './when/when.component';

@Component({
  selector: 'app-defer',
  imports: [
    PoPageModule,
    PoContainerModule,
    PoWidgetModule,
    TimerComponent,
    HoverComponent,
    InteractionComponent,
    ViewportComponent,
    WhenComponent
  ],
  templateUrl: './defer.component.html'
})
export class DeferComponent {
  height: number = 350;
}
