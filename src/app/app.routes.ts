import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
export const routes: Routes = [
  { path: 'cv', component: ProfileComponent }, // Agrega la ruta
  { path: '', redirectTo: '/cv', pathMatch: 'full' }, // Redirige la ruta raiz a /cv
];
