import { Component } from '@angular/core';
import { PoContainerModule, PoPageModule } from '@po-ui/ng-components';

import { UntrackedComponent } from './untracked/untracked.component';
import { LinkedComponent } from './linked/linked.component';
import { EffectComponent } from './effect/effect.component';
import { StoreComponent } from './store/store.component';
import { ToSignalComponent } from './to-signal/to-signal.component';

@Component({
  selector: 'app-signals-sample',
  imports: [
    PoPageModule,
    UntrackedComponent,
    LinkedComponent,
    EffectComponent,
    StoreComponent,
    ToSignalComponent,
    PoContainerModule
  ],
  templateUrl: './signals-sample.component.html'
})
export class SignalsSampleComponent {}
