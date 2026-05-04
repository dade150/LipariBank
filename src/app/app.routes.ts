import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'investimenti',
    component: DashboardComponent,
  },
  {
    path: 'polizze',
    component: DashboardComponent,
  },
  // Aggiunte le due route mancanti che impedivano routerLinkActive di attivarsi
  {
    path: 'conto-corrente',
    component: DashboardComponent,
  },
  {
    path: 'amministrazione',
    component: DashboardComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];