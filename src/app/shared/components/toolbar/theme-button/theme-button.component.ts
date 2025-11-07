import { Component, computed, effect, inject, signal } from '@angular/core';
import { PoIconModule, PoThemeTypeEnum, PoTooltipModule } from '@po-ui/ng-components';

import { ThemeService } from '../shared/services/theme.service';

@Component({
  selector: 'app-theme-button',
  imports: [PoIconModule, PoTooltipModule],
  templateUrl: './theme-button.component.html'
})
export class ThemeButtonComponent {
  readonly theme = signal<PoThemeTypeEnum>(PoThemeTypeEnum.light);
  readonly icon = computed(() => (this.theme() === PoThemeTypeEnum.light ? 'an an-moon' : 'an an-sun'));
  readonly label = computed(() => (this.theme() === PoThemeTypeEnum.light ? 'Tema escuro' : 'Tema claro'));
  private readonly themeService = inject(ThemeService);

  constructor() {
    effect(() => {
      const theme = this.themeService.onInitTheme();
      this.theme.set(theme);
    });
  }

  changeTheme(changeTheme = true): void {
    this.theme.update(theme => (theme === PoThemeTypeEnum.light ? PoThemeTypeEnum.dark : PoThemeTypeEnum.light));
    if (changeTheme) {
      this.themeService.changeTheme(this.theme());
    }
  }
}
