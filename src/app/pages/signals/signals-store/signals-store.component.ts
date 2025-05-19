import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, inject, OnInit } from '@angular/core';
import { PoListViewModule, PoLoadingModule, PoPageModule, PoInfoModule, PoContainerModule } from '@po-ui/ng-components';

import { SearchBoxComponent } from './search-box/search-box.component';
import { BaseDetailComponent } from '../../../shared/components/base/base-detail.component';
import { UserStore } from './shared/services/user.store';

@Component({
  selector: 'app-signals-store',
  imports: [
    CommonModule,
    SearchBoxComponent,
    PoPageModule,
    PoLoadingModule,
    PoListViewModule,
    PoInfoModule,
    PoContainerModule
  ],
  templateUrl: './signals-store.component.html',
  providers: [UserStore]
})
export class SignalsStoreComponent extends BaseDetailComponent implements OnInit, AfterViewInit {
  readonly store = inject(UserStore);
  height = 300;

  constructor() {
    super('signals/samples');
  }

  ngAfterViewInit(): void {
    this.onResize();
  }

  ngOnInit(): void {
    this.store.loadUsers();
  }

  @HostListener('window:resize')
  onResize(): void {
    setTimeout(() => this.setHeight(), 200);
  }

  setHeight(): void {
    const elements = [];
    elements.push(this.getElementHeightById('.po-page-header'));
    elements.push(this.getElementHeightById('.search'));
    this.height = this.calculateHeight(elements) - 150;
  }

  getElementHeightById(id: string): number {
    const el = document.querySelector(id);
    return el ? el.clientHeight : 0;
  }

  calculateHeight(elements: number[]): number {
    return elements.reduce((amount, currency) => amount - currency, window.innerHeight);
  }
}
