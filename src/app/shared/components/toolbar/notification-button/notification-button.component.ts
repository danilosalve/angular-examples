import { Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { PoBadgeModule, PoIconModule, PoPopupAction, PoPopupModule, PoTooltipModule } from '@po-ui/ng-components';
import { MetaData, NgEventBus } from 'ng-event-bus';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification-button',
  imports: [PoTooltipModule, PoPopupModule, PoBadgeModule, PoIconModule],
  templateUrl: './notification-button.component.html',
  styleUrls: ['./notification-button.component.css']
})
export class NotificationButtonComponent implements OnInit, OnDestroy {
  readonly actions: PoPopupAction[] = [];
  readonly icon = computed(() => (this.hasNotifications() ? 'an an-bell-ringing' : 'an an-bell'));
  readonly notificationNumber = signal<number>(0);
  readonly tooltip = computed(() =>
    this.hasNotifications() ? 'Existem notificações pendentes' : 'Tudo limpo por aqui'
  );

  private eventBus$ = new Subscription();
  private readonly eventBus = inject(NgEventBus);

  ngOnInit(): void {
    this.listenNotifications();
  }

  ngOnDestroy(): void {
    this.eventBus$.unsubscribe();
  }

  hasNotifications(): boolean {
    return this.notificationNumber() > 0;
  }

  listenNotifications(): void {
    this.eventBus$ = this.eventBus.on('notification').subscribe((event: MetaData) => {
      this.actions.push({
        label: event.data.message,
        icon: 'an an-eye-slash',
        action: () => {
          this.notificationNumber.update(current => current - 1);
          this.actions.pop();
        }
      });
      this.notificationNumber.update(current => current + 1);
    });
  }
}
