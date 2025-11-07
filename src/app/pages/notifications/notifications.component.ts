import { Component, inject, model, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  PoButtonModule,
  PoContainerModule,
  PoFieldModule,
  PoNotificationService,
  PoPageModule
} from '@po-ui/ng-components';
import { MetaData, NgEventBus } from 'ng-event-bus';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';

import { NotificationService } from '../../shared/services/notification.service';

const NOTIFICATION_STORAGE_KEY = 'NOTIFICATIONS';

@Component({
  selector: 'app-notifications',
  imports: [PoPageModule, PoFieldModule, PoButtonModule, FormsModule, DatePipe, PoContainerModule],
  templateUrl: './notifications.component.html'
})
export class NotificationsComponent implements OnInit, OnDestroy {
  readonly message = model<string>('');
  eventBus$ = new Subscription();
  notifications: { message: string; timestamp: Date }[] = [];

  private readonly notificationService = inject(NotificationService);
  private readonly poNotification = inject(PoNotificationService);
  private readonly eventBus = inject(NgEventBus);

  sendMessage(): void {
    if (!this.message()) {
      this.poNotification.error('Mensagem não pode ser vazia');
      return;
    }

    this.notificationService.sendNotification(this.message());
    this.message.update(() => '');
  }

  ngOnInit(): void {
    this.getNotificationsBySessionStorage();
    this.eventBus$ = this.eventBus.on('notification').subscribe((event: MetaData) => {
      this.notifications.push(event.data);
      sessionStorage.setItem(NOTIFICATION_STORAGE_KEY, JSON.stringify(this.notifications));
    });
  }

  ngOnDestroy(): void {
    this.eventBus$.unsubscribe();
  }

  getNotificationsBySessionStorage(): void {
    const session = sessionStorage.getItem(NOTIFICATION_STORAGE_KEY) || '';

    try {
      if (session) {
        const notifications = JSON.parse(session);
        this.notifications = notifications;
      }
    } catch {
      // Não existem notificacações
      return;
    }
  }
}
