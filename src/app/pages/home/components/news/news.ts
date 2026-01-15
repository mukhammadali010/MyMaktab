import { Component, OnInit, viewChild } from '@angular/core';
import { NewsItem } from '../../../../shared/generics/news-generic-card/news-generic-card.model';
import { NewsGenericComponent } from '../../../../shared/generics/news-generic-card/news-generic-card';
import { Carousel, CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NewsGenericComponent, CarouselModule, ButtonModule, TagModule],
  templateUrl: './news.html',
})
export class NewsComponent implements OnInit {
  responsiveOptions?: CarouselResponsiveOptions[];
  carousel = viewChild<Carousel>('carousel');
  newsList: NewsItem[] = [
    {
      image: './assets/images/news1.png',
      title: "Maktabgacha ta'lim tashkilotlari psixologlari uchun o‘quv seminar y...",
      date: '21.11.2025',
      views: 120,
    },
    {
      image: './assets/images/news2.png',
      title: '“Sen iste’dodlisan” tanlovining Respublika bosqichi g‘oliblarini taq...',
      date: '28.11.2025',
      views: 145,
    },
    {
      image: './assets/images/news3.png',
      title: '“Huquqiy-ma’rifiy bilimdon” respublika ijodiy ko‘rik-tanlovining...',
      date: '13.12.2025',
      views: 78,
    },
    {
      image: './assets/images/news4.png',
      title: 'O‘zbek tili sertifikati bo‘yicha aprobatsiya imtihoni o‘tkazildi',
      date: '15.12.2025',
      views: 324,
    },
  ];

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'warn';
    }
  }

  next(event: MouseEvent) {
    this.carousel()?.navForward(event);
  }

  prev(event: MouseEvent) {
    this.carousel()?.navBackward(event);
  }
}
