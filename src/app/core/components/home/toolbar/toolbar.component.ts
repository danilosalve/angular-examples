import { Component, inject, OnInit, signal, viewChild } from '@angular/core';
import {
  PoModalComponent,
  PoModalModule,
  PoThemeTypeEnum,
  PoToolbarAction,
  PoToolbarModule,
  PoToolbarProfile,
} from '@po-ui/ng-components';

import { UserAccessesComponent } from './user-accesses/user-accesses.component';
import { ThemeService } from './shared/services/theme.service';
import { MetaData, NgEventBus } from 'ng-event-bus';

@Component({
  selector: 'app-toolbar',
  imports: [PoToolbarModule, PoModalModule, UserAccessesComponent],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnInit {
  readonly aboutModal = viewChild.required('about', { read: PoModalComponent });
  readonly userAccessModal = viewChild.required('userAccess', { read: PoModalComponent });
  readonly name: string = 'Exemplos Angular';
  readonly actions: PoToolbarAction[] = [
    {
      icon: 'an an-sun',
      label: 'Tema claro',
      action: () => this.changeTheme(PoThemeTypeEnum.light),
      disabled: () => this.iconTheme() === 'an an-sun',
    },
    {
      icon: 'an an-moon',
      label: 'Tema escuro',
      action: () => this.changeTheme(PoThemeTypeEnum.dark),
      disabled: () => this.iconTheme() === 'an an-moon',
    },
  ];
  readonly profile: PoToolbarProfile = {
    avatar: 'https://avatars.githubusercontent.com/u/42416870?s=96&v=4',
    subtitle: 'github.com/danilosalve',
    title: 'Danilo Salve',
  };
  readonly profileActions: PoToolbarAction[] = [
    { icon: 'an an-user-gear', label: 'Restrições de acesso', action: () => this.openModalUserAccess() },
    { icon: 'an an-info', label: 'Sobre', action: () => this.openModalAbout() },
  ];
  readonly notificationActions: PoToolbarAction[] = [
    {
      label: 'Mais notificações',
      icon: 'an an-bell',
      url: '/notifications',
    }
  ];

  private readonly eventBus = inject(NgEventBus);

  notificationNumber = 0;

  iconTheme = signal<string>('an an-sun');
  theme = inject(ThemeService);

  ngOnInit(): void {
    const theme = this.theme.onInitTheme();
    this.changeTheme(theme, false);
    this.listenNotifications();
  }

  changeTheme(type: PoThemeTypeEnum, changeTheme = true) {
    this.iconTheme.update(() => (type === PoThemeTypeEnum.light ? 'an an-sun' : 'an an-moon'));
    if (changeTheme) {
      this.theme.changeTheme(type);
    }
  }

  openModalUserAccess(): void {
    this.userAccessModal().open();
  }

  openModalAbout(): void {
    this.aboutModal().open();
  }

  listenNotifications(): void {
    this.eventBus.on('notification').subscribe((event: MetaData) => {
      this.notificationActions.push({
        icon: 'an an-bell',
        label: event.data.message,
        action: () => {
          this.notificationNumber--;
          this.notificationActions.pop();
        },
      });
      this.notificationNumber++;
    });
  }
}
