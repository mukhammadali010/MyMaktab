import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },

  {
    path: 'cabinet',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/cabinet/cabinet').then((m) => m.CabinetPage),
    children: [
      {
        path: '',
        redirectTo: 'applications',
        pathMatch: 'full',
      },
      {
        path: 'applications',
        loadComponent: () =>
          import('./pages/cabinet/pages/applications/applications').then((m) => m.ApplicationsPage),
      },
      {
        path: 'children',
        loadComponent: () =>
          import('./pages/cabinet/pages/my-children/my-children').then((m) => m.MyChildrenPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/cabinet/pages/profile/profile').then((m) => m.ProfilePage),
      },
      {
        path: 'rules',
        loadComponent: () => import('./pages/cabinet/pages/rules/rules').then((m) => m.RulesPage),
      },
      {
        path: 'teacher',
        loadComponent: () =>
          import('./pages/cabinet/pages/teacher/teacher').then((m) => m.TeacherPage),
      },
    ],
  },

  { path: '**', redirectTo: 'not-found' },
];
