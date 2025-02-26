import { Component, inject, OnDestroy, OnInit, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PoFieldModule, PoNotificationService } from '@po-ui/ng-components';
import { debounceTime, distinctUntilChanged, filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  imports: [PoFieldModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit, OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly notifcation = inject(PoNotificationService);

  changeInValue = output<string>();
  form = this.fb.group({
    search: [''],
  });
  search$ = new Subscription();

  ngOnInit(): void {
    this.onChangeValue();
  }

  ngOnDestroy(): void {
    this.search$.unsubscribe();
  }

  onChangeValue(): void {
    this.search$ = this.form.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter(value => (value?.search?.length || 0) >= 3 || !value.search?.length),
        map(value => value.search?.toLowerCase() )
      )
      .subscribe({
        next: value => this.changeInValue.emit(value || ''),
        error: () => this.notifcation.error('Falha executar filtro'),
      });
  }
}
