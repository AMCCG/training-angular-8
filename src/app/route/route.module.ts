import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { UserInfoComponent } from '../user-info/user-info.component';
import { UserComponent } from '../user/user.component';

const route: Route[] = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  {path:'user', loadChildren: () => import('../modules/user/user.module').then(m => m.UserModule)},
  // { path: 'user', component: UserComponent },
  // { path: 'user/info/:id', component: UserInfoComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(route),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class RouteModule { }
