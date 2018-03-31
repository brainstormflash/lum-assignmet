import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';
import { SettingsComponent } from './settings';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'settings', component: NoContentComponent },
  { path: 'signout', component: NoContentComponent },
  { path: '**',    component: NoContentComponent },
];
