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

@Component({
  selector: 'app-toolbar',
  imports: [PoToolbarModule, PoModalModule, UserAccessesComponent],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnInit {
  readonly userAccessModal = viewChild.required(PoModalComponent);
  readonly name: string = 'Aplicativo de exemplo Standalone';
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
    subtitle: 'danilo.salve@teste.com.br',
    title: 'Danilo Salve',
  };
  readonly profileActions: PoToolbarAction[] = [
    { icon: 'an an-user-gear', label: 'Restrições de acesso', action: () => this.openModal() },
  ];

  iconTheme = signal<string>('an an-sun');
  theme = inject(ThemeService);

  ngOnInit(): void {
    const theme = this.theme.onInitTheme();
    this.changeTheme(theme, false);
  }

  changeTheme(type: PoThemeTypeEnum, changeTheme = true) {
    this.iconTheme.update(() => (type === PoThemeTypeEnum.light ? 'an an-sun' : 'an an-moon'));
    if (changeTheme) {
      this.theme.changeTheme(type);
    }
  }

  openModal(): void {
    this.userAccessModal().open();
  }
}
