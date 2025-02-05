import { Component, inject, OnInit, signal } from '@angular/core';
import { PoThemeTypeEnum, PoToolbarAction, PoToolbarModule } from '@po-ui/ng-components';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-toolbar',
  imports: [PoToolbarModule],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnInit {
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
}
