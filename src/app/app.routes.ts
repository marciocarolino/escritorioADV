import { type Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
    title: 'Advocacia Prestígio — Assessoria Jurídica Estratégica',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '' },
];
