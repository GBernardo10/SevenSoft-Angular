import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
// import { AdmComponent } from './dashboard/adm/adm.component'
// import { UserListComponent } from './components/user-list/user-list.component';
// import { UserEditComponent } from './components/user-edit/user-edit.component';
// import { GraficoComponent } from './components/grafico/grafico.component';
// import { LoginComponent } from './components/login/login.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { AuthGuard } from './authentication/auth.guard';
// import { ConteudoComponent } from './components/conteudo/conteudo.component';
// import { FooterSiteComponent } from './components/footer-site/footer.component';
// import { UserProfileComponent } from './components/user-profile/user-profile.component';

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
  // { path: 'perfil', component: PerfilDashboardComponent },
  // { path: 'evento', component: EventoDashboardComponent },
  // { path: 'abrir-chamado', component: ChamadosDashboardComponent },
  { path: '404', loadChildren: () => Error404Module },
  // { path: '**', redirectTo: '/404' },
]
// {
//   path: '',
//   component:ConteudoComponent,
//   pathMatch: 'full'
// },
// {
//   path:'',
//   redirectTo:'dashboard',
//   pathMatch:'full'
// },
// {
//   path: '',
//   component: AdmComponent,
//   children: [
//     {
//       path: '',
//       loadChildren: './dashboard/adm/adm.module#AdmModule',
//     }
//   ]
// },
// {
//   path: 'dashboard',
//   component: AdmComponent,
//   children: [
//     {
//       path: 'dashboard',
//       loadChildren: './dashboard/adm/adm.module#AdmModule',
//     }
//   ]
// },
// {
//   path: 'user-profile', 
//   component: UserProfileComponent,
// },

// {
//   path: 'chart',
//   component: GraficoComponent
// },
// {
//   path:'user-profile',
//   component:UserProfileComponent
// },
//   {
//     path: 'teste',
//     component: FooterSiteComponent
//   },
// ];

// {
//   path: 'homem', 
//   component: ConteudoComponent,
//   children: [
//     {
//       path: '',
//       pathMatch: 'full',
//       redirectTo: 'home'
//     };
//   ],
//     {
//       path: 'dashboard',
//       component: AdmComponent,
//       children: [
//         {
//           path: 'dashboard',
//           loadChildren: './dashboard/adm/adm.module#AdmModule'
//         }
//       ]
//     }

// {
//   path: '',
//   redirectTo: 'dashboard',
//   pathMatch: 'full'
// },
// {
//   path: '',
//   component: AdmComponent,
//   children: [
//     {
//       path: '',
//       loadChildren: './dashboard/adm/adm.module#AdmModule'
//     }
//   ]
// }
// {
//   path: '',
//   redirectTo: '/',
//   pathMatch: 'full'
// },
// {
//   path: 'user',
//   component: UserListComponent
// },
// {
//   path: 'user/add',
//   component: UserFormComponent
// },
// {
//   path: 'user/edit/:id',
//   component: UserEditComponent
// },

// {
//   path: 'login',
//   component: LoginComponent
// },
// {
//   path: 'dashboard',
//   component: DashboardComponent,
//   //canActivate:[AuthGuard]
// }



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
