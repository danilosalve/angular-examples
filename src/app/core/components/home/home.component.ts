import { Component } from '@angular/core';
import { PoMenuItem, PoMenuModule, PoPageModule } from '@po-ui/ng-components';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MENU_ITEMS } from './shared/helpers/menu.constants';
import { ToolbarComponent } from '../../../shared/components/toolbar/toolbar.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, PoMenuModule, PoPageModule, RouterOutlet, ToolbarComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  readonly menus: PoMenuItem[] = MENU_ITEMS;
}
