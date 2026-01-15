import { Component, input } from '@angular/core';

@Component({
  selector: 'app-generic-card',
  standalone: true,
  templateUrl: './generic-card.html',
})
export class GenericCard {
  outerClass = input<string>();
  innerClass = input<string>();

  circleBg = input<string>();
  icon = input<string>();

  count = input<number | string>();
  label = input<string>();
}
