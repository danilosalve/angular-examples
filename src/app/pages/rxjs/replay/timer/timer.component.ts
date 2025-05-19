import { ChangeDetectionStrategy, Component, computed, effect, inject, Signal, signal } from '@angular/core';
import { PoNotificationService } from '@po-ui/ng-components';
import { PeopleStarWarsService } from '../shared/services/people-star-wars.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent {
  timeLeft = signal(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  interval: any;
  private readonly peopleStarWarsService = inject(PeopleStarWarsService);
  private readonly notification = inject(PoNotificationService);
  private readonly timer: Signal<number> = computed(() => this.peopleStarWarsService.timer());

  constructor() {
    effect(() => {
      this.onTimerChange(this.timer());
    });
  }

  onTimerChange(timer: number): void {
    this.timeLeft.set(this.timer());

    if (timer > 0) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  startTimer(): void {
    this.notification.information('O cache foi iniciado');
    this.interval = setInterval(() => {
      if (this.timeLeft() > 0) {
        this.timeLeft.set(this.timeLeft() - 1);
      } else {
        this.notification.information('O cache expirou');
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
    this.resetTimer();
  }

  resetTimer() {
    this.timeLeft.set(0);
  }
}
