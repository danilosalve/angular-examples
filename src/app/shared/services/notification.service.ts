import { inject, Injectable } from '@angular/core';
import { NgEventBus } from 'ng-event-bus';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly eventBus = inject(NgEventBus);

  constructor() {
    this.requestPermission();
  }

  /**
   * Verifica se o usuário permite a exibição de notificacões no navegador.
   */
  requestPermission(): void {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission !== 'granted') {
          // Permissão de notificação negada
          return;
        }
      });
    } else {
      // Este navegador não suporta notificações
      return;
    }
  }

  /**
   * Exibe uma notificação utilizando a API do browse.
   * @see - A notificação só funciona se o site estiver em HTTPS (exceto localhost).
   * - O usuário precisa interagir com a página antes de permitir notificações (por segurança).
   * - Você pode usar setTimeout ou setInterval para notificações programadas.
   * @param title titulo da notificacao
   * @param options opcionais da notificacao
   */
  showNotification(title: string, options?: NotificationOptions): void {
    if (Notification.permission === 'granted') {
      new Notification(title, options);
    } else {
      // Permissão de notificação não concedida
      return;
    }
  }

  sendNotification(message: string): void {
    const notification = { message, timestamp: new Date() };
    this.eventBus.cast('notification', notification);
    this.showNotification('Você tem uma nova mensagem', { body: message, icon: 'an an-bell' });
  }
}
