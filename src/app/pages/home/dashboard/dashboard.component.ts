import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PoPageModule, PoWidgetModule } from '@po-ui/ng-components';
import { CoinsComponent } from './coins/coins.component';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, PoPageModule, PoWidgetModule, CoinsComponent],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
