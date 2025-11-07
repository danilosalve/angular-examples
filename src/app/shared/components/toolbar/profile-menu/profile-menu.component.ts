import { Component, viewChild } from '@angular/core';
import {
  PoTooltipModule,
  PoPopupModule,
  PoModalModule,
  PoModalComponent,
  PoAvatarModule,
  PoPopupAction
} from '@po-ui/ng-components';
import { UserAccessesComponent } from '../../../../core/components/home/toolbar/user-accesses/user-accesses.component';

@Component({
  selector: 'app-profile-menu',
  imports: [PoAvatarModule, PoModalModule, PoPopupModule, PoTooltipModule, UserAccessesComponent],
  templateUrl: './profile-menu.component.html'
})
export class ProfileMenuComponent {
  readonly aboutModal = viewChild.required('about', { read: PoModalComponent });
  readonly userAccessModal = viewChild.required('userAccess', { read: PoModalComponent });

  readonly actions: PoPopupAction[] = [
    { icon: 'an an-user-gear', label: 'Restrições de acesso', action: () => this.userAccessModal().open() },
    { icon: 'an an-info', label: 'Sobre', action: () => this.aboutModal().open() }
  ];
}
