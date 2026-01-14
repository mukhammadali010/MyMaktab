import { Component, input } from '@angular/core';
import { NewsItem } from './news-generic-card.model';


@Component({
  selector: 'app-news-generic-card',
  standalone: true,
  templateUrl: './news-generic-card.html'
})
export class NewsGenericComponent {
  data = input<NewsItem>();
}