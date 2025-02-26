import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  isDesktop(): boolean {
    return window.innerWidth >= 992;
  }

  isNotebook(): boolean {
    return window.innerWidth >= 700 && window.innerWidth < 992;
  }

  isSmartPhone(): boolean {
    return window.innerWidth < 481;
  }

  isTable(): boolean {
    return window.innerWidth >= 481 && window.innerWidth < 700;
  }
}
