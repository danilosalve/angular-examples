import { Component } from '@angular/core';
import { PoMenuItem, PoMenuModule, PoPageModule } from '@po-ui/ng-components';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { MENU_ITEMS } from './shared/helpers/menu.constants';

@Component({
  selector: 'app-home',
  imports: [CommonModule, PoMenuModule, PoPageModule, RouterOutlet, ToolbarComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  readonly menus: PoMenuItem[] = MENU_ITEMS;
}
