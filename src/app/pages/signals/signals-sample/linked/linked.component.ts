import { Component, inject, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PoButtonModule, PoContainerModule, PoFieldModule, PoNotificationService } from '@po-ui/ng-components';

@Component({
  selector: 'app-linked',
  imports: [PoContainerModule, PoButtonModule, PoFieldModule, FormsModule],
  templateUrl: './linked.component.html'
})
export class LinkedComponent {
  readonly courses = [
    {
      value: 'BEGINNERS',
      label: 'Angular para Iniciantes',
      defaultQuantity: 10
    },
    {
      value: 'SIGNALS',
      label: 'Angular | Se aprofundando em Signals',
      defaultQuantity: 20
    },
    {
      value: 'SSR',
      label: 'Angular | Se aprofundando em SSR',
      defaultQuantity: 30
    }
  ];
  selectedCourse = signal<string | null>('BEGINNERS');
  quantity = linkedSignal({
    source: () => ({ courseCode: this.selectedCourse }),
    /**
     * o valor do sinal de quantidade muda com base na lógica definida em
     * o bloco de computação, neste caso, obtemos o curso selecionado
     * quantidade padrão e defini-la para o sinal de quantidade
     */
    computation: (source) => {
      return this.courses.find(c => c.value === source.courseCode())?.defaultQuantity ?? 1;
    }
  });

  private readonly poNotificationService: PoNotificationService = inject(PoNotificationService);

  onQuantityChanged(quantity: string): void {
    this.quantity.set(parseInt(quantity));
  }

  onAddToCart(): void {
    this.poNotificationService.success(`${this.quantity()} adicionado para o curso ${this.selectedCourse()}`);
  }

  onCourseSelected(courseCode: string): void {
    this.selectedCourse.set(courseCode);
  }
}
