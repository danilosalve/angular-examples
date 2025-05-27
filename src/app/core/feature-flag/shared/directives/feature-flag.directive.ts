import { Directive, inject, input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { FeatureFlagStoreService } from '../services/feature-flag-store.service';

@Directive({
  selector: '[appFeatureFlag]'
})
export class FeatureFlagDirective implements OnInit {
  readonly featureFlag = input<string | string[]>('');
  readonly featureFlagOr = input<string>('');

  private vcr = inject(ViewContainerRef);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private tpl = inject(TemplateRef<any>);
  private featureFlagStore = inject(FeatureFlagStoreService);

  ngOnInit(): void {
    if (this.featureFlagStore.hasFlags(this.featureFlag()) || this.featureFlagStore.hasFlags(this.featureFlagOr())) {
      this.vcr.createEmbeddedView(this.tpl);
    }
  }
}
