import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoCheckboxModule, PoContainerModule } from '@po-ui/ng-components';

import { FeatureFlagStoreService } from './../../../../feature-flag/shared/services/feature-flag-store.service';

@Component({
  selector: 'app-user-accesses',
  imports: [PoCheckboxModule, PoContainerModule, FormsModule],
  templateUrl: './user-accesses.component.html'
})
export class UserAccessesComponent implements OnInit {
  canAccessUsers = signal<boolean>(false);
  canUserDarkMode = signal<boolean>(false);
  isAdmin = signal<boolean>(false);

  private readonly featureFlagStore = inject(FeatureFlagStoreService);

  ngOnInit(): void {
    this.loadAccess();
  }

  loadAccess(): void {
    this.canAccessUsers.set(this.featureFlagStore.hasFlags('users'));
    this.canUserDarkMode.set(this.featureFlagStore.hasFlags('darkMode'));
    this.isAdmin.set(this.featureFlagStore.hasFlags('isAdmin'));
  }

  onChange(): void {
    this.save();
  }

  save(): void {
    this.featureFlagStore.setStore({
      featureFlags: {
        users: this.canAccessUsers(),
        darkMode: this.canUserDarkMode(),
        isAdmin: this.isAdmin()
      }
    });
  }
}
