import { Routes } from '@angular/router';
import {RegisterComponent} from './auth/register/register.component';
import {LoginComponent} from './auth/login/login.component';
import {MainPageCombinedComponent} from './mainPage/main-page-combined/main-page-combined.component';

export const routes: Routes = [
  { path: '', component: MainPageCombinedComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];
