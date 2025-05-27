import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  imports: [],
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {
  readonly rating = input.required<number>();
  readonly max = input.required<number>();
  readonly count = input<number>(0);
  stars: number[] = [];

  ngOnInit(): void {
    for (let index = 0; index < this.max(); index++) {
      this.stars.push(index);
    }
  }

  getStarClass(index: number): string {
    if (index <= this.rating()) return 'an-fill an-star';
    return index - 1 + 0.5 < this.rating() ? 'an-fill an-star-half' : 'an an-star';
  }
}
