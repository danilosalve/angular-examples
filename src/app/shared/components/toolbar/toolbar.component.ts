import { Component } from '@angular/core';

import { ThemeButtonComponent } from './theme-button/theme-button.component';
import { NotificationButtonComponent } from './notification-button/notification-button.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { AppMenuComponent } from './app-menu/app-menu.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  imports: [AppMenuComponent, ThemeButtonComponent, NotificationButtonComponent, ProfileMenuComponent]
})
export class ToolbarComponent {}
