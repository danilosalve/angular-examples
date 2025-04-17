import { Component } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';

import { UntrackedComponent } from './untracked/untracked.component';
import { LinkedComponent } from './linked/linked.component';
import { EffectComponent } from './effect/effect.component';

@Component({
  selector: 'app-signals-sample',
  imports: [PoPageModule, UntrackedComponent, LinkedComponent, EffectComponent],
  templateUrl: './signals-sample.component.html',
})
export class SignalsSampleComponent {}
