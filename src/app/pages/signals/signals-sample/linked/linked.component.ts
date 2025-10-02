import { Component, inject, linkedSignal, OnInit, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  PoButtonModule,
  PoContainerModule,
  PoFieldModule,
  PoIconModule,
  PoNotificationService,
  PoSelectComponent,
  PoTooltipModule
} from '@po-ui/ng-components';

@Component({
  selector: 'app-linked',
  imports: [PoContainerModule, PoButtonModule, PoFieldModule, FormsModule, PoIconModule, PoTooltipModule],
  templateUrl: './linked.component.html'
})
export class LinkedComponent implements OnInit {
  readonly poSelect = viewChild.required(PoSelectComponent);
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
  readonly selectedCourse = signal<string | null>('BEGINNERS');
  readonly quantity = linkedSignal({
    source: () => ({ courseCode: this.selectedCourse }),
    /**
     * o valor do sinal de quantidade muda com base na lógica definida em
     * o bloco de computação, neste caso, obtemos o curso selecionado
     * quantidade padrão e defini-la para o sinal de quantidade
     */
    computation: source => {
      return this.courses.find(c => c.value === source.courseCode())?.defaultQuantity ?? 1;
    }
  });

  private readonly poNotificationService: PoNotificationService = inject(PoNotificationService);

  ngOnInit(): void {
    this.poSelect().modelValue = this.selectedCourse();
  }

  onQuantityChanged(quantity: string): void {
    this.quantity.set(parseInt(quantity));
  }

  onAddToCart(): void {
    const course = this.courses.find(c => c.value === this.selectedCourse());
    this.poNotificationService.success(`${this.quantity()} adicionado para o curso ${course?.label}`);
  }

  onCourseSelected(courseCode: string): void {
    this.selectedCourse.set(courseCode);
  }
}
