import { Component, inject, model, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  PoButtonModule,
  PoContainerModule,
  PoFieldModule,
  PoNotificationService,
  PoPageModule
} from '@po-ui/ng-components';
import { NotificationService } from '../../shared/services/notification.service';
import { MetaData, NgEventBus } from 'ng-event-bus';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';

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
    this.eventBus$ = this.eventBus.on('notification').subscribe((event: MetaData) => {
      this.notifications.push(event.data);
    });
  }

  ngOnDestroy(): void {
    this.eventBus$.unsubscribe();
  }
}
