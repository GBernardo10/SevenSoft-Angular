import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Site/login/login.component';
import { GuardService } from './Site/services/guard.service';
import { UserDashboardModule } from './dashboard/user-dashboard/user-dashboard.module';
import { Error404Module } from './Site/error404/error404.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/:id', loadChildren: () => UserDashboardModule, canActivate: [GuardService] },
  { path: '404', loadChildren: () => Error404Module },
  // { path: '**', redirectTo: '/404' },
]
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
