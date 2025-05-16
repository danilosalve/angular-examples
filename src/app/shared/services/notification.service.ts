import { inject, Injectable } from '@angular/core';
import { NgEventBus } from 'ng-event-bus';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private readonly eventBus = inject(NgEventBus);

  sendNotification(message: string): void {
    const notification = { message, timestamp: new Date() };
    this.eventBus.cast('notification', notification);
  }
}
