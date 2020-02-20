import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';
import {AccountComponent} from './account/account.component';

const appRoutes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
