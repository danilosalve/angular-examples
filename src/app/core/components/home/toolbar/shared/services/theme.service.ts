import { inject, Injectable } from '@angular/core';
import { PoThemeTypeEnum, PoThemeService } from '@po-ui/ng-components';
import { TOKEN_THEME_DEFAULT } from '../helpers/token-theme-default.constants';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  poTheme = inject(PoThemeService);
  poThemeSample = TOKEN_THEME_DEFAULT;

  changeTheme(type: PoThemeTypeEnum) {
    this.poTheme.setTheme(this.poThemeSample, type);

    if (type === PoThemeTypeEnum.light) {
      this.changeThemeTypeInStorage('po-theme-default');
    } else {
      this.changeThemeTypeInStorage('po-theme-dark');
    }
  }

  onInitTheme(): PoThemeTypeEnum {
    const themeTypeStorage: string = this.getThemeTypeInStorage() || 'po-theme-default';
    const theme = themeTypeStorage === 'po-theme-default' ? PoThemeTypeEnum.light : PoThemeTypeEnum.dark;
    this.changeTheme(theme);
    return theme;
  }

  private changeThemeTypeInStorage(theme: string): void {
    localStorage.setItem('po-ui-theme', theme);
  }

  private getThemeTypeInStorage(): string | null {
    return localStorage.getItem('po-ui-theme');
  }
}
