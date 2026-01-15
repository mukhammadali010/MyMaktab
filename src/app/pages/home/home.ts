import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { ServicesComponent } from './components/servicesComponent/servicesComponent';
import { NewsComponent } from './components/news/news';
import { Faq } from './components/faq/faq';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [Navbar, Hero, About, ServicesComponent, NewsComponent, Faq, Footer],
})
export class Home {}
