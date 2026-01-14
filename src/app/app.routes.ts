import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'not-found' },
    { path:'home' , loadComponent: ()=> import('./pages/home/home').then(m => m.Home)}
];
