import { Component, OnInit, inject, signal } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../core/services/auth.service';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [PanelMenuModule, BreadcrumbModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  breadCrumb: MenuItem[] | undefined;
  home: MenuItem | undefined;
  currentUrl = signal<string>('');
  items: MenuItem[] = [
    {
      label: 'Mening arizalarim',
      icon: 'icon-chat',
      routerLink: '/cabinet/applications',
    },
    {
      label: 'Mening farzandlarim',
      icon: 'icon-users',
      routerLink: '/cabinet/children',
    },
    {
      label: 'Mening maʼlumotlarim',
      icon: 'icon-user',
      routerLink: '/cabinet/profile',
    },
    {
      label: 'Odob axloq qoidalari',
      icon: 'icon-book',
      routerLink: '/cabinet/rules',
    },
    {
      label: 'O‘qituvchi',
      icon: 'icon-teacher',
      routerLink: '/cabinet/teacher',
    },
  ];

  ngOnInit() {
    this.home = { icon: 'pi pi-home', routerLink: 'cabinet/applications' };

    this.updateBreadcrumb();

    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.updateBreadcrumb();
    });
  }

  private updateBreadcrumb() {
    this.currentUrl.set(this.router.url);

    const activeItem = this.items.find((item) => this.currentUrl().includes(item.routerLink));

    if (activeItem) {
      this.breadCrumb = [
        {
          label: activeItem.label,
          routerLink: activeItem.routerLink,
        },
      ];
    } else {
      this.breadCrumb = [];
    }
  }

  logout() {
    this.authService.logout();
  }
}
