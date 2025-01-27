import { PoButtonModule, PoContainerModule, PoFieldModule } from '@po-ui/ng-components';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { Component, computed, inject, OnInit, signal, untracked } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, map } from 'rxjs';

@Component({
  selector: 'app-untracked',
  imports: [CommonModule, PoButtonModule, PoFieldModule, PoContainerModule, ReactiveFormsModule],
  providers: [TitleCasePipe],
  templateUrl: './untracked.component.html'
})
export class UntrackedComponent implements OnInit {
  counter = signal(0);
  form: FormGroup;
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
