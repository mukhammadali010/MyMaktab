import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { Languages } from './navbar.model';
import { ButtonComponent } from '../button/button';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  imports: [Select, FormsModule, ButtonComponent],
})
export class Navbar implements OnInit {
  private router = inject(Router);
  authService = inject(AuthService);
  languages: Languages[] | undefined;
  selectedLangulage: Languages | undefined;

  navItems = [
    { label: 'Loyiha haqida', target: 'about' },
    { label: 'Xizmatlar', target: 'services' },
    { label: 'Yangiliklar', target: 'news' },
    { label: 'FAQ', target: 'faq' },
    { label: 'Maktabni qidirish', target: 'hero' },
  ];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  ngOnInit() {
    this.languages = [
      {
        id: 1,
        name: "O'z",
        code: 'UZ',
        flag: 'assets/flags/uz.svg',
      },
      {
        id: 2,
        name: 'Eng',
        code: 'EN',
        flag: 'assets/flags/en.svg',
      },
      {
        id: 3,
        name: 'Ru',
        code: 'RU',
        flag: 'assets/flags/ru.svg',
      },
    ];
    this.selectedLangulage = this.languages[0];
  }

  loginToCabinet() {
    this.authService.login('token123');
    this.router.navigate(['cabinet']);
  }
  logout() {
    this.authService.logout();
  }
}
