import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly TOKEN_KEY = 'token';
  private router = inject(Router);

  isLoggedIn = signal<boolean>(this.hasToken());

  login(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
    this.isLoggedIn.set(true);
    this.router.navigate(['/cabinet']);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.isLoggedIn.set(false);
    this.router.navigate(['/']);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}
