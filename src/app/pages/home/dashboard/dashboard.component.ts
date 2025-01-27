import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PoPageModule, PoWidgetModule } from '@po-ui/ng-components';

@Component({
    selector: 'app-dashboard',
    imports: [CommonModule, PoPageModule, PoWidgetModule],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {}
