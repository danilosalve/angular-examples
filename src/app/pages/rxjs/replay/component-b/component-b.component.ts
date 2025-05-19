import { Component, inject, model, viewChild } from '@angular/core';
import {
  PoButtonModule,
  PoFieldModule,
  PoInfoModule,
  PoLoadingModule,
  PoModalComponent,
  PoModalModule,
  PoNotification,
  PoNotificationService
} from '@po-ui/ng-components';
import { finalize } from 'rxjs';
import { FormsModule } from '@angular/forms';

import { PeopleStarWarsService } from '../shared/services/people-star-wars.service';
import { StarWarsPeopleList } from '../shared/interface/star-wars-people-list';
import { StarWarsPeople } from '../shared/interface/star-wars-people';

@Component({
  selector: 'app-component-b',
  imports: [PoFieldModule, PoButtonModule, PoLoadingModule, PoModalModule, FormsModule, PoInfoModule],
  templateUrl: './component-b.component.html'
})
export class ComponentBComponent {
  isLoading = false;
  name = model<string>('Luke');
  modal = viewChild.required(PoModalComponent);
  people!: StarWarsPeople;

  private readonly peopleStarWarsService = inject(PeopleStarWarsService);
  private readonly poNotification = inject(PoNotificationService);

  onClickSearch(): void {
    this.isLoading = true;
    this.peopleStarWarsService
      .findPeopleWithCache(this.name())
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: res => this.onHandleResponse(res),
        error: () => this.poNotification.success('Falha ao tentar buscar pessoa')
      });
  }

  onHandleResponse(response: StarWarsPeopleList): void {
    if (response.results.length) {
      this.people = response.results[0];
      const notification: PoNotification = {
        message: this.people?.name || '',
        actionLabel: 'Detalhes',
        supportMessage: 'Pesquisa concluída com sucesso',
        action: () => this.modal().open()
      };
      this.poNotification.success(notification);
    } else {
      this.poNotification.warning('Nenhum resultado foi encontrado para a pesquisa');
    }
  }
}
