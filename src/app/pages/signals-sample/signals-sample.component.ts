import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, computed, inject, OnInit, signal, untracked } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PoPageModule, PoFieldModule, PoContainerModule, PoButtonModule } from '@po-ui/ng-components';
import { debounceTime, map } from 'rxjs';

@Component({
    selector: 'app-signals-sample',
    imports: [CommonModule, PoPageModule, PoFieldModule, PoContainerModule, PoButtonModule, ReactiveFormsModule],
    providers: [TitleCasePipe],
    templateUrl: './signals-sample.component.html'
})
export class SignalsSampleComponent implements OnInit {
  counter = signal(0);
  form!: FormGroup;
  info = computed(
    () => `O nome agora é ${this.name()} e o valor do contador era ${untracked(this.counter)} quando o nome mudou`
  );
  name = signal<string>('Nome não informado');
  titleCasePipe = inject(TitleCasePipe);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(
        debounceTime(500),
        map(value => {
          value.name = value.name || 'Nome não informado';
          return value;
        })
      )
      .subscribe({
        next: value => this.name.update(name => (name = this.titleCasePipe.transform(value.name)))
      });
  }

  incrementCount(): void {
    this.counter.update(counter => counter + 1);
  }
}
