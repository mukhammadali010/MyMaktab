import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Footer } from '../../shared/components/footer/footer';
import { Hero } from '../../features/components/hero/hero';
import { About } from '../../features/components/about/about';
import { ServicesComponent } from '../../features/components/servicesComponent/servicesComponent';
import { NewsComponent } from '../../features/components/news/news';
import { Faq } from '../../features/components/faq/faq';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [Navbar, Hero, About, ServicesComponent, NewsComponent, Faq, Footer],
})
export class Home {}
