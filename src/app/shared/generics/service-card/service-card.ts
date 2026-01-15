import { Component, input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,
  templateUrl: './service-card.html',
})
export class ServiceCardComponent {
  icon = input<string>();
  iconLink = input<string>();
  bgImage = input<string>();
  title = input<string>();
  description = input<string>();

  bgClass = input<string>('bg-[#F5F1FD]');
}
