import { Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoFieldModule, PoButtonModule, PoLoadingModule, PoNotificationService } from '@po-ui/ng-components';
import { finalize } from 'rxjs';
import { PeopleStarWarsService } from '../shared/services/people-star-wars.service';

@Component({
  selector: 'app-component-a',
  imports: [PoFieldModule, PoButtonModule, PoLoadingModule, FormsModule],
  templateUrl: './component-a.component.html'
})
export class ComponentAComponent {
  readonly name = model<string>('Luke');
  isLoading = false;

  private readonly peopleStarWarsService = inject(PeopleStarWarsService);
  private readonly poNotification = inject(PoNotificationService);

  onClickSearch(): void {
    this.isLoading = true;
    this.peopleStarWarsService
      .findPeopleWithCache(this.name())
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: () => this.poNotification.success('Sucesso'),
        error: () => this.poNotification.success('Falha ao tentar buscar pessoa')
      });
  }
}
